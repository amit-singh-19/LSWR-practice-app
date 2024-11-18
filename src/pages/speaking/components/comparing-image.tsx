import { Card, CardContent } from "@/components/ui/card";
import {  Choice, MCQQuestion } from "@/types/speaking";
import { useEffect, useState, useRef } from "react";
import Timer from "./timer";
import { cn } from "@/lib/utils";

interface ComparingImageProps {
  prepartionTime: number;
  recordingTime: number;
  selectionTime: number;
  question: MCQQuestion;
  comparison: Choice | undefined;
}

export default function ComparingImage({
  question,
  prepartionTime,
  recordingTime,
  selectionTime,
  comparison
}: ComparingImageProps) {
  const [image1, setImage1] = useState(question.choices[0]);
  const [image2, setImage2] = useState(question.choices[1]);
  const selectedChoiceRef = useRef<Choice | null>(null);
  const [timer, setTimer] = useState(selectionTime);
  const [isPreparationPhase, setIsPreparationPhase] = useState(true);

  const handleImageSelect = (image: Choice) => {
    selectedChoiceRef.current = image;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          if (selectedChoiceRef.current) {
            setImage2(selectedChoiceRef.current);
          } else {
            setImage2(image1);
          }
          if(comparison){
            setImage1(comparison);
          }

          setIsPreparationPhase(false);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="font-medium mb-4 text-customLightBlue">
        <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">
          i
        </span>
        {isPreparationPhase ? (
          <>
            <span>{question.question}</span>
          </>
        ) : (
          <span>{comparison?.info}</span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          onClick={() => handleImageSelect(image1)}
          className={cn(
            "border border-black rounded-sm h-[500px] cursor-pointer",
            selectedChoiceRef.current === image1 && "bg-customDarkSkyBlue"
          )}
        >
          {!isPreparationPhase && (
            <p className="text-center mt-2 text-gray-600 text-sm font-medium">
              Your family's choice
            </p>
          )}
          <CardContent className="p-4">
            <img
              src={image1.image}
              alt={image1.title}
              width={300}
              height={250}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-sm text-gray-600">{image1.title}</h3>
            <div className="whitespace-pre-wrap   text-sm mt-4 list-inside text-gray-600">
              {image1.text}
            </div>
          </CardContent>
        </Card>

        <Card
          onClick={() => handleImageSelect(image2)}
          className={cn(
            "border border-black rounded-sm h-[500px] cursor-pointer",
            selectedChoiceRef.current === image2 && "bg-customDarkSkyBlue",
            timer === 0 && "bg-customLightGreen"
          )}
        >
          {!isPreparationPhase && (
            <p className="text-center mt-2 text-gray-600 text-sm font-medium">
              Your's choice
            </p>
          )}

          <CardContent className="p-4">
            <img
              src={image2.image}
              alt={image2.title}
              width={300}
              height={250}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-sm text-gray-600">{image2.title}</h3>
            <div className="whitespace-pre-wrap  text-sm mt-4 list-inside text-gray-600">
             {image1.text}
            </div>
          </CardContent>
        </Card>
      </div>

      {isPreparationPhase && (
        <Timer preparationTime={selectionTime} recordingTime={recordingTime} />
      )}
      {!isPreparationPhase && (
        <Timer preparationTime={prepartionTime} recordingTime={recordingTime} />
      )}
    </div>
  );
}
