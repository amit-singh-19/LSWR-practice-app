import CardLayout from "@/components/card-layout";

interface VideoInstructionProps {
  title: string;
  nextLink: string;
  prevLink: string;
  videoSrc: string;
}

const VideoInstruction = ({
  title,
  nextLink,
  prevLink,
  videoSrc
} : VideoInstructionProps) => {
  return (
    <CardLayout
      title={title}
      nextLink={nextLink}
      prevLink={prevLink}
    >
      <div className="py-8 px-16  min-h-[75vh] bg-gray-50">
        <video
          controls
          src={videoSrc}
          className="w-full h-[50vh]"
          autoPlay
        />
      </div>
    </CardLayout>
  );
};
export default VideoInstruction;
