import InstructionHeader from "./instruction-header";

interface InstructionVideoProps {
  videoSrc: string;
  description?: string;
}

const InstructionVideo = ({
  description,
  videoSrc
} : InstructionVideoProps) => {
  return (
   
      <div className="min-h-[75vh] px-8 pt-8  bg-customLighGray">
        {description && <InstructionHeader
        text={description}
        />}
        <video
          controls
          src={videoSrc}
          className="w-full h-[50vh] mt-10"
          autoPlay
        />
      </div>
  );
};
export default InstructionVideo;
