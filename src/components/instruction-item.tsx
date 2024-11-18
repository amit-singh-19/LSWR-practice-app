import { cn } from "@/lib/utils";

interface InstructionItemProps {
  instructions: {
    text?: string;
    audio?: string;
    image?: string;
  }[];
}

export default function InstructionItem({
  instructions,
}: InstructionItemProps) {
  
  return (
    <ul className={cn("list-disc pl-20 mb-4 w-[70%]",  instructions[0].image && "pl-0 w-full")}>
      {instructions.map((instruction, index) => (
        <>
          {instruction.text && (
            <li
              className={cn(
                "py-4 font-medium text-customLightBlue",
                index != instructions.length - 1 && "border-b border-dashed"
              )}
              key={index}
            >
              {instruction?.text}
            </li>
          )}

          {instruction.audio && <audio src={instruction.audio} autoPlay />}
          {instruction.image && (
            <img
              src={instruction.image}
              alt="instructions"
              className="w-[80%] mx-auto mt-4 object-cover"
            />
          )}
        </>
      ))}
    </ul>
  );
}
