"use client";

import { useRouter } from "next/navigation";
import { quizCaterories } from "@/lib/util";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/test/${id}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick(inputValue);
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 text-center mb-4">
        Welcome to AI Quiz Test
      </h2>
      <p className="text-base sm:text-lg text-gray-500 text-center mb-5">
        Please select a quiz topic...
      </p>
      <div className="w-full flex flex-col gap-4 items-center">
        {quizCaterories.map((category, i) => (
          <section
            className="w-full flex flex-wrap justify-center items-center space-x-3 sm:space-x-5"
            key={i}
          >
            {category.map((topic) => (
              <button
                key={topic.id}
                className="bg-blue-500 text-white px-4 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md mb-2"
                onClick={() => {
                  handleClick(topic.id);
                }}
              >
                {topic.name}
              </button>
            ))}
          </section>
        ))}
        <form
          className="w-full flex flex-wrap justify-center gap-4 items-center mt-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-full sm:w-auto text-black px-4 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md mb-2"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your own topic"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 sm:px-5 py-2 sm:py-3 text-base sm:text-xl rounded-md mb-2"
          >
            Or choose your own topic
          </button>
        </form>
      </div>
    </main>
  );
}
export default Home;