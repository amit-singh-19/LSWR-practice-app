
interface ScenarioSection {
    content: string;
    scenarioInfo: string;
  }
  
  export const ScenarioSection: React.FC<ScenarioSection> = ({ content, scenarioInfo }) => {
    return (
      <div className="bg-customLighGray p-4 h-[75vh] overflow-y-scroll">
         <h2 className="font-medium mb-4 text-customLightBlue">
          <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">i</span>
          {scenarioInfo}
        </h2>
        <div className="whitespace-pre-wrap text-sm text-gray-600">{content}</div>
      </div>
    );
  };