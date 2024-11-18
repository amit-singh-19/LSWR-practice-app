interface InstructionHeaderProps {
    text: string;
}

export default function InstructionHeader({
    text
} : InstructionHeaderProps) {
  return (
    <div className="px-8 pt-4  flex items-center gap-2 font-medium text-customLightBlue">
      <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">
        i
      </span>
      <h3 className="">{text}</h3>
    </div>
  );
}
