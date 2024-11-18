import CardLayout from "@/components/card-layout";
import { cn } from "@/lib/utils";

interface MainInstructionProps {
    title: string;
    subtitle: string;
    nextLink: string;
    prevLink: string;
    instructions: string[];
}

export default function MainInstruction({
    title, 
    subtitle,
    nextLink,
    prevLink,
    instructions
} : MainInstructionProps) {
  return (
   
        <CardLayout
        title={title}
        nextLink={nextLink}
        prevLink={prevLink}
        >

          <div className=" flex items-center gap-2 font-medium text-customLightBlue px-8 pt-4">
          <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">i</span>
            <h3 className="">{subtitle}</h3>
          </div>
          <ul className="list-disc pl-24 mb-4 max-w-[70%]">
            {instructions.map((instruction, index) => (
              <li className={cn("py-4 font-medium text-customLightBlue", index != instructions.length - 1 && "border-b border-dashed")} key={index}>
                {instruction}
              </li>
            ))}
          </ul>

        </CardLayout>


  );
}
