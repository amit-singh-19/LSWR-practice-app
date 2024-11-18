import CardLayout from "@/components/card-layout";
import { cn } from "@/lib/utils";
import img from "@/assets/endPage.png";
import { Button } from "./ui/button";
import { Check, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Separator } from "./ui/separator";

interface EndPageProps {
  title: string;
  nextLink: string;
  instructions: string[];
}

const data = [
  "Two complete practice tests",
  "Instant results for the Listening and Reading Tests",
  "Performance Standards for the Writing and Speaking Tests",
  "Sample Writing and Speaking responses for one test, and much more!",
];

const EndPage = ({ title, nextLink, instructions }: EndPageProps) => {
  const location = useLocation();
  const isLastPage = location.pathname.includes("speaking");
  const { prevPage } = location.state || {};

  return (
    <CardLayout title={title} nextLink={nextLink} prevLink={prevPage}>
      <div className="py-6 px-16  min-h-[75vh]">
        <ul className="list-disc mb-4 max-w-[70%]">
          {instructions.map((instruction, index) => (
            <li
              className={cn(
                "py-4 font-medium text-customLightBlue",
                index != instructions.length - 1 && "border-b border-dashed"
              )}
              key={index}
            >
              {instruction}
            </li>
          ))}
        </ul>
        {isLastPage && (
          <div>
            <Separator className="my-8" />
            <div className="flex items-center gap-2 mb-2 font-medium text-customLightBlue">
              <Info />
              <h3 className="">End of Practice Test A</h3>
            </div>

            <Link
              to={"/"}
              className="ml-8 text-lg font-medium text-customBlue hover:underline"
            >
              Back to Main
            </Link>
            <Separator className="my-8" />
          </div>
        )}

        <div className="grid grid-cols-3 gap-16">
          <div className="flex flex-col justify-between col-span-1">
            <img src={img} alt="book" className="w-72" />
            <Button
              size="lg"
              className="px-20 py-2 text-lg text-white bg-customBlue hover:bg-customBlue/90"
            >
              Buy Now
            </Button>
          </div>

          <div className="flex flex-col col-span-2 text-gray-600">
            <h2 className="text-xl font-medium">
              Keep practicing with the CELPIP Practice Tests!
            </h2>

            <div className="flex-grow">
              <p className="my-4 text-sm">
                Each of the CELPIP-General Practice Tests (Online) includes:
              </p>
              <div>
                {data.map((item, index) => (
                  <div className="flex items-center gap-2">
                    <Check className="size-5" />
                    <p key={index} className="text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-customBlue">
              <span className="text-lg font-medium class">
                {" "}
                Save up to $30.00{" "}
              </span>{" "}
              on CELPIP Practice Test bundles.
            </div>
          </div>
        </div>
      </div>
    </CardLayout>
  );
};
export default EndPage;
