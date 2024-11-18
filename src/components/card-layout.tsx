import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardLayout {
  title: string;
  nextLink?: string;
  prevLink?: string;
  isPrevDisabled?: boolean;
  children: ReactNode;
  timer?: number;
  enableNext?: boolean;
  recordingTime?: number;
  hasAnswerKey?: boolean;
}

export default function CardLayout({
  title,
  nextLink,
  prevLink,
  isPrevDisabled = false,
  children,
  enableNext = true,
  timer,
  recordingTime,
  hasAnswerKey = false,
}: CardLayout) {
  const displayTimer = (time: number) => {
    if (time) {
      if (time > 60) {
        return `${Math.floor(time / 60)} minute${Math.floor(time / 60) > 1 ? "s" : ""}`;
      } else if (time > 0) {
        return `${timer} second${time > 1 ? "s" : ""}`;
      }
    } else {
      return "None";
    }
  };
  const location = useLocation();
  const isLastPage = location.pathname.includes("speaking/end-page");

  const showTime = location.pathname.includes("speaking")
    ? "Prepartion: "
    : "Remaining time ";

  const answerKey = location.pathname.includes("listening")
    ? "/listening/answer-key"
    : "/reading/answer-key";
  return (
    <section className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <Card className="max-w-5xl mx-auto overflow-hidden bg-white border border-gray-300 shadow">
        <CardHeader
          className={cn(
            "flex flex-row justify-between items-center bg-gray-200 py-2 border-gray-300 border-b"
          )}
        >
          <h2 className="text-gray-600">{title}</h2>
          <div className="relative gap-4 text-sm">
            {recordingTime !== undefined && (
              <p className="absolute right-80 top-2 w-[180px]">
                Recording:{" "}
                <span
                  className={cn(
                    "text-red-600",
                    recordingTime >= 60 && "text-gray-700 font-medium"
                  )}
                >
                  {displayTimer(recordingTime)}
                </span>
              </p>
            )}
            {timer !== undefined && (
              <p
                className={cn(
                  "absolute right-32 top-2 w-[190px]",
                  location.pathname.includes("speaking") && "w-[190px]"
                )}
              >
                {showTime}
                <span
                  className={cn(
                    "text-red-600",
                    timer >= 60 && "text-gray-700 font-medium"
                  )}
                >
                  {displayTimer(timer)}
                </span>
              </p>
            )}
            <div className="flex gap-2">
              <Button
                variant={"outline"}
                disabled={isPrevDisabled}
                onClick={() => prevLink && window.history.back()}
              >
                <ChevronLeft />
              </Button>

              {!isLastPage && enableNext && (
                <Link to={nextLink!}>
                  <Button variant={"outline"}>
                    <ChevronRight />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 text-base min-h-[75vh] tracking-wide">
          {children}
        </CardContent>
        {hasAnswerKey && (
          <CardFooter
            className={cn(
              "flex py-2 bg-customGray border-gray-300 border-t",
              hasAnswerKey ? "justify-between" : "justify-end"
            )}
          >
            <Link to={answerKey}>
              <Button className="text-gray-600 bg-white hover:bg-customLighGray hover:text-gray-600">
                Answer Key
              </Button>
            </Link>
          </CardFooter>
        )}
      </Card>
    </section>
  );
}
