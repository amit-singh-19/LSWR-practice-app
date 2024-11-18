import { DropdownSelect } from "@/pages/reading/components/dropdown-select";
import { Question } from "@/types/reading";
import React from "react";

interface QuestionSetProps {
  questions: Question[];
  questionInfo: string;
  
}

export const QuestionSet: React.FC<QuestionSetProps> = ({
  questions,
  questionInfo,
}) => {
  if(questions.length === 0){
    return null;
  }
  return (
    <div>
      <h2 className="font-medium mb-4 text-customLightBlue">
        <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">i</span>
        {questionInfo}
      </h2>
      <div className="border border-black p-4 rounded-md space-y-2">
        {questions.map((question, index) => (
          <div
            key={question.question}
            className="flex items-center gap-2 text-gray-600 text-sm flex-wrap"
          >
            <span className="">{index + 1}.</span>
            <span className="">{question.question}</span>
            <DropdownSelect question={question} />
          </div>
        ))}
      </div>

    </div>
  );
};
