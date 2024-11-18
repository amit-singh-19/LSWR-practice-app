import CardLayout from "@/components/card-layout";
import InsructionHeader from "@/components/instruction-header";
import InstructionItem from "@/components/instruction-item";
import InstructionVideo from "@/components/instruction-video";
import { useWritingContext } from "@/context/WritingContext";
import { Navigate, useLocation, useParams } from "react-router-dom";
import SimpleQuesion from "./components/simple-question";
import { ScenarioSection } from "./components/scenario-section";
import { MCQQuestion } from "./components/mcq-question";

export default function Writing() {
  const { sectionId } = useParams();
  const { pathname } = useLocation();

  const { writingData } = useWritingContext();

  const id = parseInt(sectionId!);
  const section = writingData.structure[id - 1];

  if(!section){
    return <Navigate to={"/writing/end-page"} state={{
      prevPage: pathname
    }} />
  }

  const next = `/writing/${id + 1}`;

  return (
    <CardLayout timer={section.duration} title={section.title} prevLink={pathname} nextLink={next}>
      <div className="min-h-[75vh] overflow-y-scroll">
        {!section.questionSets && section.instructions[0].text && (
          <InsructionHeader text={section.instructions[0].text!} />
        )}
        {section.instructions[0].video && (
          <InstructionVideo videoSrc={section.instructions[0].video} />
        )}
        {section.instructions.length > 1 && (
          <InstructionItem instructions={section.instructions.slice(1)} />
        )}

        {section.questionSets && <>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <ScenarioSection 
            scenarioInfo={section.instructions[0].text!}
            content={section.description!}
          />
          {section.questionSets[0].questions[0].type === 'simple' && <SimpleQuesion questionInfo={section.questionSets[0].questions[0].question} instructions={section.questionSets[0].questions[0].instructions!} />}
          {section.questionSets[0].questions[0].type === 'mcq' && <MCQQuestion questionInfo={section.questionSets[0].questions[0].question} options={section.questionSets[0].questions[0].choices!} />}
        </div>
        </>}
      </div>
    </CardLayout>
  );
}
