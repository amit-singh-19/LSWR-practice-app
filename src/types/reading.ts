interface Instruction {
  text?: string;
  video?: string;
}

export interface Choice {
  text: string;
}

export interface Question {
  question: string;
  type: 'mcq'; 
  choices: Choice[];
  correctAnswer: string;
  score: number;
}

interface QuestionSet {
  instructions: Instruction[];
  questions: Question[];
}

interface TestSection {
  title: string;
  description?: string;
  instructions?: Instruction[];
  duration?: number;
  questionSets?: QuestionSet[];
}

export interface ReadingTest {
  type: 'Reading';
  structure: TestSection[];
}