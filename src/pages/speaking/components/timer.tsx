import { Clock, Mic } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useLocation } from "react-router-dom";
import { useSpeakingContext } from "@/context/SpeakingContext";

interface TimerProps {
  preparationTime: number;
  recordingTime: number;
}

const Timer = ({ preparationTime, recordingTime }: TimerProps) => {
  const [time, setTime] = useState(preparationTime);
  const [isRecording, setIsRecording] = useState(false);
  const [show, setShow] = useState(false);
  const [recordingDuration] = useState(recordingTime);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { endAudio, startAudio } = useSpeakingContext();

  const startRef = useRef<HTMLAudioElement>(null);
  const endRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();

  useEffect(() => {
    setTime(preparationTime);
    setIsRecording(false);
    setShow(false);
    setAudioUrl(null);
  }, [location.pathname, preparationTime]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (!isRecording) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(interval!);
            startRef.current?.play();
            setTimeout(() => {
              setShow(true);
              setIsRecording(true);
              startRecording();
            }, 3000);
            return recordingDuration;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      interval = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRecording, recordingDuration, preparationTime]);

  useEffect(() => {
    if (time === 0 && isRecording) {
      stopRecording();
      endRef.current?.play();
      setShow(false);
    }
  }, [time, isRecording]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/mp3",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        audioChunksRef.current = [];
      };

      mediaRecorder.start();
    });
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
  };

  return (
    <div className="py-2">
      {!isRecording && (
        <div className="mx-auto bg-gray-200 py-6 px-10 rounded-md flex items-center justify-between w-fit gap-8">
          <div className="bg-white p-2 rounded-sm">
            <Clock />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-semibold">Preparation Time</span>
            <span className="text-blue-600">{time}</span>
          </div>
        </div>
      )}

      {show && isRecording && (
        <div className="mx-auto bg-gray-200 py-6 px-10 rounded-md flex items-center justify-between w-fit gap-8">
          <div className="bg-white p-2 rounded-sm">
            <Mic />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-semibold">Recording Time</span>
            <span className="text-red-600">{time}</span>
            <Progress
              value={((recordingDuration - time) / recordingDuration) * 100}
            />
          </div>
        </div>
      )}

      {audioUrl && (
        <div className="mt-4 flex flex-col justify-center items-center">
          <audio controls src={audioUrl} ref={audioRef}></audio>
          <button
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => {
              setAudioUrl(null);
              setTime(3);
              setIsRecording(false);
              setShow(false);
            }}
          >
            Re-record
          </button>
        </div>
      )}

      <audio ref={startRef} src={startAudio} />
      <audio ref={endRef} src={endAudio} />
    </div>
  );
};

export default Timer;
