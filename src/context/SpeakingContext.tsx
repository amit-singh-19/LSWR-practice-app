import { createContext, useContext, ReactNode } from "react";
import { SpeakingTest } from "@/types/speaking";
import { speaking } from "@/data/speakingTest";

interface SpeakingContextType {
  speakingData: SpeakingTest;
  startAudio: string;
  endAudio: string;
}

const SpeakingContext = createContext<SpeakingContextType | undefined>(
  undefined
);

export const SpeakingProvider = ({ children }: { children: ReactNode }) => {
  const speakingData = speaking;
  const startAudio = "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/S_Speaking_Start.ogg"
  const endAudio = "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/S_Speaking_Stop.ogg"

  return (
    <SpeakingContext.Provider value={{ speakingData, startAudio, endAudio }}>
      {children}
    </SpeakingContext.Provider>
  );
};

export const useSpeakingContext = () => {
  const context = useContext(SpeakingContext);
  if (!context) {
    throw new Error("useSpeakingContext must be used within a ReadingProvider");
  }
  return context;
};
