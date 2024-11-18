
interface ReadingPassageProps {
  content: string;
  passageInfo?: string;
}

export const ReadingPassage: React.FC<ReadingPassageProps> = ({ content, passageInfo }) => {
  return (
    <div className="bg-customLighGray p-4 h-[75vh] overflow-y-scroll">
      {passageInfo &&  <h2 className="font-medium mb-4 text-customLightBlue">
        <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">i</span>
        {passageInfo}
      </h2>}
      <div className="whitespace-pre-wrap text-sm text-gray-600">{content}</div>
    </div>
  );
};