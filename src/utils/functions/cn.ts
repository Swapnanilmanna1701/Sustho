import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PUZZLE_QUESTIONS } from "@/data/questions";
import { Question } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getQuestion = (id: string): Question => {
  return PUZZLE_QUESTIONS.filter((item) => item.id === id)[0];
};

export function getCustomWeekdayNumber(date: Date) {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}

export function absoluteUrl(path: string) {
  return `${
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  }${path}`;
}
export const timestamps: { createdAt: true; updatedAt: true } = {
  createdAt: true,
  updatedAt: true,
};



export type Action = "create" | "update" | "delete";

export type OptimisticAction<T> = {
  action: Action;
  data: T;
};

