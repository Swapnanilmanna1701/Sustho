"use client";

import { capitalize } from "@/lib/util";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function TestPage() {
  // get current quiz topic from url
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number>(0);
  // track current question number
  const [currQuestion, setCurrQuestion] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  // this state define if user already chosen an answer for current question
  const [answerChosen, setAnswerChosen] = useState<boolean>(false);
  // to store the answer
  const [answer, setAnswer] = useState<string>("");

  // useCallBack will trigger if the given input (id) changes
  const fetchQuestions = useCallback(async () => {
    const req = await fetch(`/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic: id }),
    });
    const data = await req.json();
    setQuestions(data.questions);
    setLoading(false);
  }, [id]);

  // to prevent loop when useCallBack triggered
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleAnswerClick = (answer: string) => {
    // update score state
    setScore(score => answer === questions[currQuestion].answer ? score + 1 : score);
    setAnswerChosen(true);
    setAnswer(answer);
  }

  const handleNextQuestion = () => {
    // questions count
    if (currQuestion < questions.length - 1) {
      setCurrQuestion(count => count + 1);
      setAnswerChosen(false);
    } else {
      // if this is the last question, wait for score to update before redicrect to score page
      setTimeout(() => {
        router
          .push("/score?score="
            // add the score as url parameter
            + score
            // add the topic as parameter, skip the "question" part of the string
            + `&topic=${capitalize(id).split(' ')[0]}`);
      }, 100);
    }
  };

  // loading screen
  if (loading) {
    return (
      <main className="w-full min-h-screen p-6 flex flex-col items-center justify-center">
        <h3 className='font-semibold text-2xl mb-3'>Loading...</h3>
      </main>
    );
  }

  // show the right answer and next question button
  if (answerChosen) {
    return (
      <main className="w-full min-h-screen p-6 flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl mb-4 text-blue-500 text-center">
          {capitalize(id)}
        </h2>
        <h3 className="font-semibold text-2xl mb-3">
          Question: {currQuestion + 1} of {questions.length}
        </h3>
        <h3 className="text-xl mb-4">
          {questions[currQuestion]?.question}
        </h3>

        <div className="flex flex-col lg:w-1/3 mb-6">
          {questions[currQuestion]?.options.map((option, i) => (
            <button
              className={
                // show a different bg and color for the right answer
                `p-4 rounded-xl mb-6 min-w[200px] text-lg
                  ${option === questions[currQuestion].answer
                  ? "bg-green-500 text-white border-green-700"
                  : "bg-gray-300 text-gray-600 border-red-500"}
                  ${option === answer
                  ? "border-4"
                  : "border-0"
                }
                `
              }
              disabled
              key={i}
            >
              {option}
            </button>
          )
          )}
          <button
            className="p-4 bg-blue-500 rounded-xl mb-6 min-w[200px] text-white text-lg
           hover:bg-yellow-500 hover:text-black"
            onClick={() => handleNextQuestion()}
          >
            {currQuestion < questions.length - 1 ? "Next question" : "Show score"}
          </button>
        </div>
      </main >
    );
  }

  // show the question and 4 answer options
  return (
    <main className="w-full min-h-screen p-6 flex flex-col items-center justify-center">
      <h2 className="font-bold text-3xl mb-4 text-blue-500 text-center">
        {capitalize(id)}
      </h2>
      <h3 className="font-semibold text-2xl mb-3">
        Question: {currQuestion + 1} of {questions.length}
      </h3>
      <h3 className="text-xl mb-4">
        {questions[currQuestion]?.question}
      </h3>

      <div className="flex flex-col lg:w-1/3 mb-6">
        {questions[currQuestion]?.options.map((option, i) => (
          <button
            className="p-4 bg-gray-300 rounded-xl mb-6 min-w[200px] text-black text-lg
           hover:bg-red-400 hover:text-white"
            key={i}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </button>
        ))}
        <button
          className="p-4 bg-blue-500 rounded-xl mb-6 min-w[200px] text-white text-lg
           hover:bg-yellow-500 hover:text-black"
          onClick={() => handleNextQuestion()}
        >
          Skip question
        </button>
      </div>
    </main>
  )
}
