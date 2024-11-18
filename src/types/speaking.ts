interface Instruction {
  text?: string;
  video?: string;
}

interface Choice {
  title?: string;
  text: string;
  image?: string;
  info?: string;
}

interface BaseQuestion {
  question: string;
  score?: number;
  type: 'simple' | 'mcq';
}

interface SimpleQuestion extends BaseQuestion {
  type: 'simple';
}

interface MCQQuestion extends BaseQuestion {
  type: 'mcq';
  choices: Choice[];
  defaultAnswer?: {
    text: string;
    choice: Choice
  }
}

type Question = SimpleQuestion | MCQQuestion;

interface QuestionSet {
  instructions?: Instruction[];
  questions: Question[];
}

interface TestSection {
  title: string;
  description?: string;
  instructions?: Instruction[];
  prepTime?: number;
  recordingTime?: number;
  selectionTime?: number;
  questionSets?: QuestionSet[];
  note?: string;
}

interface SpeakingTest {
  type: 'Speaking';
  structure: TestSection[];
}


export type { 
  SpeakingTest, 
  TestSection, 
  QuestionSet, 
  Question, 
  SimpleQuestion, 
  MCQQuestion, 
  Choice, 
  Instruction 
};