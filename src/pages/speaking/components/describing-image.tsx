import Timer from "./timer";

interface DescribingImageProps {
  title: string;
  preparationTime: number;
  recordingTime: number;
  imageUrl: string;
}

export default function DescribingImage({
    title,
    preparationTime,
    recordingTime,
    imageUrl
} : DescribingImageProps) {
  return (
    <div>
      <h2 className="font-medium mb-4 text-customLightBlue">
        <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">
          i
        </span>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src={imageUrl} alt={title} />
      <Timer preparationTime={preparationTime} recordingTime={recordingTime} />
      </div>
    </div>
  );
}
