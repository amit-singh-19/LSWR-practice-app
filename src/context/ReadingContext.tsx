
import { createContext, useContext, ReactNode, useState } from 'react';
import { reading } from '@/data/readingTest';
import { ReadingTest } from '@/types/reading';
import { flattenReadingTest } from '@/lib/utils';

interface ReadingContextType {
  readingData: ReadingTest;
  userAnswers: number[]; 
  setUserAnswer: (index: number, answer: number) => void; 

}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export const ReadingProvider = ({ children }: { children: ReactNode }) => {
  const readingData = reading;
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(flattenReadingTest(readingData).length).fill(-1)); 

  const setUserAnswer = (index: number, answer: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };
  

  return (
    <ReadingContext.Provider value={{ readingData, userAnswers, setUserAnswer}}>
      {children}
    </ReadingContext.Provider>
  );
};

export const useReadingContext = () => {
  const context = useContext(ReadingContext);
  if (!context) {
    throw new Error("useReadingContext must be used within a ReadingProvider");
  }
  return context;
};
