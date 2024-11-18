

  interface Instruction {
    text?: string;
    video?: string;
    audio?: string;
    image?: string;
  }
  
  export interface Choice {
    text?: string;
    image?: string;
  }
  
  export interface Question {
    type: "mcq" | "simple";
    text: string;
    choices?: Choice[];
    correctAnswer: string;
    score: number;
    duration?: number;
  }
  
  interface QuestionSet {
    instructions?: Instruction[];
    questions: Question[];
  }
  
  interface Section {
    title: string;
    description?: string;
    instructions?: Instruction[];
    duration?: number;
    prepTime?: number;
    questionSets?: QuestionSet[];
  }
  
  export interface ListeningTest {
    type: "Listening";
    structure: Section[];
  }
  
  
  