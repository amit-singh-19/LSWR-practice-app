import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Info } from "lucide-react";
import { Choice } from "@/types/listening";
import { countQuestionsBySectionTitle, getFlattenedQuestionIndexListening, getQuestionIndex } from "@/lib/utils";
import { useListeningContext } from "@/context/ListeningContext";

interface QuestionSectionProps {
  question: string;
  options: Choice[];
  title: string;
  audioSrc: string;
}

const QuestionSection = ({ options, question, title, audioSrc }: QuestionSectionProps) => {

  const { listeningData, setUserAnswer } = useListeningContext();
 
  const totalQuestions = countQuestionsBySectionTitle(listeningData, title);
  const currentQuestion = getQuestionIndex(listeningData, title, audioSrc);
  const questionIndex = getFlattenedQuestionIndexListening(listeningData, title, audioSrc);

  const handleAnswerChange = (value: string) => {
    const selectedIndex = options.findIndex(option => option.image === value || option.text === value);
   
    if(questionIndex){
      setUserAnswer(questionIndex, selectedIndex); 
    } else {
      setUserAnswer(-1, selectedIndex); 
    }
  };
  return (
    <div className="border-l flex-1 pt-4 bg-customSkyBlue px-6 min-h-[75vh]">
      <div className="text-gray-600 text-sm mb-4">
       {`Question ${currentQuestion} of ${totalQuestions}`}
      </div>
      <div className="flex items-start gap-2 mb-4 tracking-tight">
        <Info className="self-start mt-[2px]" />
        <h3 className="leading-tight">{question}</h3>
      </div>

      <RadioGroup onValueChange={handleAnswerChange}>
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className="flex items-center  space-x-2 border-b border-gray-300 border-dotted ml-8 py-2 hover:bg-customGreen"
            >

              <RadioGroupItem   value={option.text! || option.image!} id={option.text || option.image} />
              {option.text && (

                <Label className="cursor-pointer" htmlFor={option.text}>
                  {option.text}
                </Label>
              )}
              {option.image && (
                <Label className="cursor-pointer" htmlFor={option.image}>
                  <img src={option.image} className="w-44" alt="option" />
                </Label>
              )}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};
export default QuestionSection;
