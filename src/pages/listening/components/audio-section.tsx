import { Info, Volume2 } from "lucide-react";
import { useState, useRef, SetStateAction } from "react";
import { Progress } from "@/components/ui/progress";

interface AudioSectionProps {
  setEnableNext?: React.Dispatch<SetStateAction<boolean>>;
  audioUrl: string;
  audioInfo: string;
}

const AudioSection = ({
  setEnableNext,
  audioInfo,
  audioUrl
} : AudioSectionProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);



const handlePlay = () => {
    setIsCompleted(false);
  };

  

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      const progressValue = (currentTime / duration) * 100;
      setProgress(progressValue);
    }
  };

  const handleEnd = () => {
    setIsCompleted(true);
    if(setEnableNext){
      setEnableNext(true);
    }
  }

  

  return (
    <div className="flex-1 py-4 px-6 bg-customLighGray min-h-[75vh]">
      <div className="flex items-start gap-2 mb-4 tracking-tight text-customLightBlue">
        <Info className="self-start " />
        <h3 className="leading-tight">{audioInfo || "Listen to a short statement. You will hear it only once."}</h3>
      </div>


      <div className="py-2">
        <div className="mx-auto bg-customGray py-6 px-10 rounded-md flex items-center justify-between w-fit gap-8">
          <div className="bg-white p-2 rounded-sm">
            {!isCompleted ? <Volume2 /> : <Info />}
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>
              {!isCompleted ? "Playing..." : `Click "NEXT" to continue.`}
            </span>
            {!isCompleted && (
              <Progress
                value={progress}
                className="w-[200px] bg-white rounded-none h-4 mt-2"
              />
            )}
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        controls
        autoPlay
        src={audioUrl}
        className="w-[400px] mb-4 mx-auto"
        onPlay={handlePlay}
        onTimeUpdate={handleTimeUpdate} 
        onEnded={handleEnd}
      />
    </div>
  );
};

export default AudioSection;
