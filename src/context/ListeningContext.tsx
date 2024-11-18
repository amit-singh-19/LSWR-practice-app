
import { createContext, useContext, ReactNode, useState } from 'react';
import  { listening } from '@/data/listeningTest';
import { ListeningTest } from '@/types/listening';
import { flattenListeningTest } from '@/lib/utils';

interface ListeningContextType {
  listeningData: ListeningTest;
  userAnswers: number[]; 
  setUserAnswer: (index: number, answer: number) => void; 

}

const ListeningContext = createContext<ListeningContextType | undefined>(undefined);

export const ListeningProvider = ({ children }: { children: ReactNode }) => {
  const listeningData = listening;
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(flattenListeningTest(listeningData).length).fill(-1)); 

  const setUserAnswer = (index: number, answer: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };
  

  return (
    <ListeningContext.Provider value={{ listeningData, userAnswers, setUserAnswer}}>
      {children}
    </ListeningContext.Provider>
  );
};

export const useListeningContext = () => {
  const context = useContext(ListeningContext);
  if (!context) {
    throw new Error("useListeningContext must be used within a ListeningProvider");
  }
  return context;
};
