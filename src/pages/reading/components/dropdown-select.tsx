import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useReadingContext } from "@/context/ReadingContext";
import { cn, getFlattenedQuestionIndexReading } from "@/lib/utils";
import { Choice, Question } from "@/types/reading";

interface DropdownSelectProps {
  question: Question;
}

export const DropdownSelect: React.FC<DropdownSelectProps> = ({ question }) => {
  const { setUserAnswer, readingData } = useReadingContext();

  const handleChange = (
    value: string,
    questionText: string,
    options: Choice[]
  ) => {
    const questionIndex = getFlattenedQuestionIndexReading(
      readingData,
      questionText
    );

    const selectedIndex = options.findIndex((option) => option.text === value);

    setUserAnswer(questionIndex || -1, selectedIndex);
  };
  return (
    <Select
      onValueChange={(value) =>
        handleChange(value, question.question, question.choices)
      }
    >
      <SelectTrigger
        className={cn(
          "min-w-20 h-6 w-fit rounded-none border-none bg-white font-semibold text-xl focus:outline-none focus:ring-0"
        )}
      >
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        {question.choices.map((option, index) => (
          <SelectItem key={index} value={option.text}>
            {option.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
