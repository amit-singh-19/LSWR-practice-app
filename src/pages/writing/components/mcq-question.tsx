import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

interface MCQQuestionProps {
  options: {
    text: string;
}[];
  questionInfo: string;
}

function numberToLetter(num: number) {
  return String.fromCharCode(65 + num);
}

export const MCQQuestion: React.FC<MCQQuestionProps> = ({
  options,
  questionInfo,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="col-span-2 p-4 bg-customSkyBlue border-l border-gray-300 h-[75vh] overflow-y-scroll">
      <h2 className="font-medium mb-4 text-customLightBlue">
        <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">i</span>
        {questionInfo}
      </h2>
      <div className="list-disc pl-8">
        {options.map((option, index) => (
          <label key={index} className="block mb-2 text-sm text-gray-600">
            <input
              type="radio"
              name="option"
              value={index}
              onChange={() => handleOptionChange(index)}
              className="mr-2"
            />
            <span className="font-medium">Option {numberToLetter(index)}:</span> {option.text}
          </label>
        ))}
      </div>

      {selectedOption !== null && (
        <div className="">
          <Separator className="my-8" />
          <h2 className="font-medium  text-customLightBlue">
          <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">i</span>
          {"Explain the reasons for your choice. Write about 150-200 words."}
        </h2>
        <textarea
          name=""
          id=""
          className="w-full h-80 rounded-md border mt-8 p-2"
          ></textarea>
          </div>
      )}
    </div>
  );
};