import { Edge, Node } from "reactflow";

export type Question = {
  id: string;
  title: string;
  difficulty: "easy" | "intermediate" | "hard";
  description: string;
  functionalRequirements: string[];
  nonFunctionalRequirements: string[];
  assumptions: string[];
  estimatedUsage: string[];
  answerNodes: Array<Node>
  answerEdges: Array<Edge>
};



export interface Phonetic {
  text: string;
  audio?: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
}

export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export type DictionaryEntry ={
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

export interface DictionaryError {
  title: string;
  message: string;
  resolution: string;
}