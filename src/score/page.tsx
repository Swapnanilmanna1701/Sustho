"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function Score() {
  return (
    <Suspense fallback={<h3 className='font-semibold text-2xl mb-3'>Loading...</h3>}>
      <ScoreContent />
    </Suspense>
  )
}

function ScoreContent() {
  const urlParams = useSearchParams();
  const score = urlParams.get("score");
  const topic = urlParams.get("topic");

  return (
    <main className="p-4 min-h-screen w-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">Score</h2>
      {score
        ? (
          <>
            <p className="text-lg text-center mb-4">
              You got {score} out of 10 questions correct
            </p>
            <h1 className="font-extrabold text-7xl text-red-400 mb-3">
              {topic}
            </h1>
            <h1 className="font-extrabold text-5xl text-blue-500 mb-3">
              {Number(score) * 10}%
            </h1>
            <Link href="/" className="bg-blue-500 p-4 text-blue-50 rounded">
              Take more test
            </Link>
          </>
        )
        : (
          <>
            <p className="text-lg text-center mb-4">
              Need to take a quiz first to recieve a score
            </p>
            <Link href="/" className="bg-blue-500 p-4 text-blue-50 rounded">
              Click to test now
            </Link>
          </>
        )
      }
    </main>
  )
}