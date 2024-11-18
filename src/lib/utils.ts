import listeningTestMockData from "@/data/listeningTest";
import { readingTestMockData } from "@/data/readingTest";
import { ListeningTest, Question } from "@/types/listening";
import { ReadingTest, Question as ReadingQuestion } from "@/types/reading";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function countQuestionsBySectionTitle(
  test: ListeningTest,
  title: string
): number {
  let totalQuestions = 0;

  test.structure.forEach((section) => {
    if (section.title === title && section.questionSets) {
      totalQuestions += 1;
    }
  });

  return totalQuestions;
}

export function getQuestionIndex(
  test: ListeningTest,
  sectionTitle: string,
  audioUrl: string
): number | null {
  let currentIndex = 0;
  for (const section of test.structure) {
    if (section.questionSets && section.title === sectionTitle) {
      currentIndex++;
      if (section.questionSets[0].questions[0].text === audioUrl) {
        return currentIndex;
      }
    }
  }

  return null;
}

export function flattenListeningTest(test: ListeningTest) {
  const flatQuestions: {
    title: string;
    question: Question;
  }[] = [];

  test.structure.forEach((section) => {
    section.questionSets?.forEach((questionSet) => {
      questionSet.questions.forEach((question) => {
        flatQuestions.push({ title: section.title, question });
      });
    });
  });

  return flatQuestions;
}

export function flattenReadingTest(test: ReadingTest) {
  const flatQuestions: {
    title: string;
    question: ReadingQuestion;
  }[] = [];

  test.structure.forEach((section) => {
    section.questionSets?.forEach((questionSet) => {
      questionSet.questions.forEach((question) => {
        flatQuestions.push({ title: section.title, question });
      });
    });
  });

  return flatQuestions;
}

export function getFlattenedQuestionIndexListening(
  test: ListeningTest,
  sectionTitle: string,
  audioUrl: string
): number | null {
  const flatQuestions = flattenListeningTest(test);
  let ansIndex = null;
  flatQuestions.forEach((question, index) => {
    if(question.title === sectionTitle && question.question.text === audioUrl){
      ansIndex = index;
      return;
    }
  })
  return ansIndex;
}

export function getFlattenedQuestionIndexReading(
  test: ReadingTest,
  questionText: string
): number | null {
  const flatQuestions = flattenReadingTest(test);
  let ansIndex = null;
  flatQuestions.forEach((question, index) => {
    if(question.question.question === questionText){
      ansIndex = index;
      return;
    }
  })
  return ansIndex;
}

export function getActualQuestionIndexListening(
  test: ListeningTest,
  sectionTitle: string
): number | null {
  let currentIndex = 0;
  for (const section of test.structure) {
    currentIndex++;
    if (section.questionSets && section.title === sectionTitle) {
      return currentIndex - 1;
    }
  }

  return null;
}

export function getActualQuestionIndexReading(
  test: ReadingTest,
  sectionTitle: string
): number | null {
  let currentIndex = 0;
  for (const section of test.structure) {
    currentIndex++;
    if (section.questionSets && section.title === sectionTitle) {
      return currentIndex;
    }
  }

  return null;
}

export const getTotalQuestionsInPart = (partNumber: number) => {
  const part = listeningTestMockData.parts.find(
    (p) => p.partNumber === partNumber
  );

  if (!part) {
    return `Part ${partNumber} not found.`;
  }

  const totalQuestions = part.sections.reduce(
    (acc, section) => acc + section.questions.length,
    0
  );

  return totalQuestions;
};

export function getNextExerciseId(currentExerciseId: string): string | null {
  const currentExerciseIndex = readingTestMockData.exercise.findIndex(
    (exercise) => exercise.id === currentExerciseId
  );

  if (
    currentExerciseIndex !== -1 &&
    currentExerciseIndex < readingTestMockData.exercise.length - 1
  ) {
    return readingTestMockData.exercise[currentExerciseIndex + 1].id;
  }

  return null;
}

// export function getNextSpeakingExerciseId(
//   currentExerciseId: string
// ): string | null {
//   const currentExerciseIndex = speakingTestData.exercise.findIndex(
//     (exercise) => exercise.id === currentExerciseId
//   );

//   if (
//     currentExerciseIndex !== -1 &&
//     currentExerciseIndex < speakingTestData.exercise.length - 1
//   ) {
//     return speakingTestData.exercise[currentExerciseIndex + 1].id;
//   }

//   return null;
// }

