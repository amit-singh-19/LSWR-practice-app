import { Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Choice, Question } from "@/types/listening";
import { useListeningContext } from "@/context/ListeningContext";
import { getFlattenedQuestionIndexListening } from "@/lib/utils";

interface QuestionnaireComponentProps {
  questions: Question[];
  sectionTitle: string;
}

const QuestionnaireComponent = ({
  questions,
  sectionTitle,
}: QuestionnaireComponentProps) => {
  const { setUserAnswer, listeningData } = useListeningContext();

  const handleChange = (
    value: string,
    questionText: string,
    options: Choice[]
  ) => {
    const questionIndex = getFlattenedQuestionIndexListening(
      listeningData,
      sectionTitle,
      questionText
    );

    const selectedIndex = options.findIndex((option) => option.text === value);

    setUserAnswer(questionIndex || -1, selectedIndex);
  };

  return (
    <div className="p-6 bg-customSkyBlue min-h-[75vh]">
      <div className="flex items-center gap-2 mb-4 text-customLightBlue">
        <Info size={24} />
        <h2 className="font-medium">
          Choose the best way to complete each statement from the drop-down menu
          (▼).
        </h2>
      </div>

      <ol className="space-y-4">
        {questions.map((question, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-600 text-sm"
          >
            <span className="">{index + 1}.</span>
            <span className="">{question.text}</span>
            <Select
              onValueChange={(value) =>
                handleChange(value, question.text, question.choices!)
              }
            >
              <SelectTrigger className="min-w-20 w-fit rounded-none border-none bg-white font-semibold text-xl focus:outline-none focus:ring-0">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {question.choices &&
                  question.choices.map((option, index) => (
                    <SelectItem key={index} value={option.text!}>
                      {option.text}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QuestionnaireComponent;
