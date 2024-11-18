
import { createContext, useContext, ReactNode } from 'react';
import { writingData as data } from '@/data/writingData';
import { WritingTest } from '@/types/writing';

interface WritingContextType {
  writingData: WritingTest
}

const WritingContext = createContext<WritingContextType | undefined>(undefined);

export const WritingProvider = ({ children }: { children: ReactNode }) => {
  const writingData = data;


  return (
    <WritingContext.Provider value={{ writingData }}>
      {children}
    </WritingContext.Provider>
  );
};

export const useWritingContext = () => {
  const context = useContext(WritingContext);
  if (!context) {
    throw new Error("useWritingContext must be used within a WritingProvider");
  }
  return context;
};
