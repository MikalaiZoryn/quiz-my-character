export type Option = {
  text: string;
  scores: Partial<Record<string, number>>;
};

export type QuizQuestion = {
  question: string;
  options: Option[];
};

export type QuizResult = {
  name: string;
  image: string;
  description: string;
};

export type QuizPack = {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  results: QuizResult[];
  winnerPriority: string[];
};
