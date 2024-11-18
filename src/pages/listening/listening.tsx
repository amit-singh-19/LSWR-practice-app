/* eslint-disable react-hooks/rules-of-hooks */
import CardLayout from "@/components/card-layout";
import InstructionHeader from "@/components/instruction-header";
import InstructionItem from "@/components/instruction-item";
import InstructionVideo from "@/components/instruction-video";
import { useListeningContext } from "@/context/ListeningContext";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import AudioSection from "./components/audio-section";
import QuestionSection from "./components/question-section";
import Preparation from "./components/preparation";
import QuestionnaireComponent from "./components/questionnaire";

export default function Listening() {
  const { sectionId } = useParams();
  const { pathname } = useLocation();
  const { listeningData } = useListeningContext();

  const id = parseInt(sectionId!);
  const section = listeningData.structure[id - 1];

  if (!section) {
    return (
      <Navigate
        to={"/listening/answer-key"}
        state={{
          prevPage: pathname,
        }}
      />
    );
  }

  const [timer, setTimer] = useState<number | undefined>(
    section.duration || undefined
  );
  const [enableNext, setEnableNext] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev) {
          if (prev <= 0) return 0;
          return prev - 1;
        } else {
          return undefined;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (
      section.questionSets &&
      section.questionSets &&
      section.questionSets[0].questions.length <= 1 &&
      section.questionSets[0].questions[0].type === "mcq"
    ) {
      setEnableNext(false);
    }
    setTimer(section.duration || undefined);
  }, [location.pathname]);

  const next = `/listening/${id + 1}`;

  return (
    <CardLayout
      enableNext={enableNext}
      timer={timer}
      title={section.title}
      prevLink={pathname}
      nextLink={next}
      hasAnswerKey={section.questionSets !== undefined || false}
    >
      <div className="min-h-[75vh] overflow-y-scroll">
        {!section.questionSets &&
          section.instructions &&
          section.instructions[0].text && (
            <InstructionHeader text={section.instructions[0].text!} />
          )}
        {section.instructions && section.instructions[0].video && (
          <InstructionVideo
            description={section.description || undefined}
            videoSrc={section.instructions[0].video}
          />
        )}
        {section.instructions && section.instructions.length > 1 && (
          <InstructionItem instructions={section.instructions.slice(1)} />
        )}

        {section.prepTime && (
          <Preparation
            info={section.description!}
            time={section.prepTime}
            next={next}
          />
        )}

        {section.instructions && section.instructions[0].audio && (
          <>
            <div className="flex justify-evenly text-customLightBlue text-lg">
              <AudioSection
                audioInfo={section.description || ""}
                audioUrl={section.instructions[0].audio}
              />
            </div>
          </>
        )}

        {section.questionSets &&
          section.questionSets[0].questions.length > 1 && (
            <>
              <QuestionnaireComponent
                questions={section.questionSets[0].questions}
                sectionTitle={section.title}
              />
            </>
          )}

        {section.questionSets &&
          section.questionSets[0].questions[0].type === "mcq" &&
          section.questionSets &&
          section.questionSets[0].questions.length <= 1 && (
            <>
              <div className="flex justify-evenly text-customLightBlue text-lg">
                <AudioSection
                  audioInfo={
                    (section.instructions && section.instructions[0]?.text) ||
                    ""
                  }
                  setEnableNext={setEnableNext}
                  audioUrl={section.questionSets[0].questions[0].text}
                />
                <QuestionSection
                  audioSrc={section.questionSets[0].questions[0].text}
                  title={section.title}
                  question={
                    (section.questionSets[0].instructions &&
                      section.questionSets[0].instructions[0].text) ||
                    ""
                  }
                  options={section.questionSets[0].questions[0].choices!}
                />
              </div>
            </>
          )}
      </div>
    </CardLayout>
  );
}
