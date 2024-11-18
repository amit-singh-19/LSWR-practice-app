import CardLayout from "@/components/card-layout";
import { speakingTestData } from "@/data/speakingTest";
import SpeakingTest from "./speaking-test";

export default function SpeakingDemoTest() {
    const {demoTest} = speakingTestData;
    const next = speakingTestData.exercise[0].id
  return (
    <CardLayout 
        title={demoTest.title}
        prevLink="/speaking/video-instruction"
        nextLink={`/speaking/${next}`}
        timer={demoTest.prepartionTime}
        recordingTime={demoTest.recordingTime}
    >
        <div className="py-6 px-8">
          <SpeakingTest
          preparationTime={demoTest.prepartionTime}
          recordingTime={demoTest.recordingTime}
          title={demoTest.question}
          />

          
        </div>
    </CardLayout>
  )
}