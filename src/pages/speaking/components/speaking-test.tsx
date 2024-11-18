import { Separator } from "@/components/ui/separator";
import Timer from "./timer";

interface SpeakingTestProps {
  title: string;
  preparationTime: number;
  recordingTime: number;
  additionalInfo?: string;
}

export default function SpeakingTest({
  title,
  preparationTime,
  recordingTime,
  additionalInfo
}: SpeakingTestProps) {
  return (
    <div>
      <h2 className="font-medium mb-4 text-customLightBlue">
        <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">
          i
        </span>
        {title}
      </h2>
      {
      additionalInfo &&  <div className="whitespace-pre-wrap font-medium text-gray-600">{additionalInfo}</div>

      }
      <Separator className="my-8" />
      <Timer preparationTime={preparationTime} recordingTime={recordingTime} />
    </div>
  );
}
