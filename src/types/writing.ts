export type WritingTest = {
  type: string;
  structure: Array<{
    title: string;
    instructions: Array<{
      text?: string;
      video?: string;
    }>;
    duration?: number;
    description?: string;
    note?: string;
    questionSets?: Array<{
      questions: Array<{
        question: string;
        instructions?: Array<{ text: string }>;
        type: "simple" | "mcq";
        score: number;
        choices?: Array<{ text: string }>;
        correctAnswer?: string;
      }>;
    }>;
  }>;
};


