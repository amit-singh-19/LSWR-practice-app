import CardLayout from "@/components/card-layout";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, X } from "lucide-react";
import { flattenListeningTest, getActualQuestionIndexListening } from "@/lib/utils";
import { useListeningContext } from "@/context/ListeningContext";
import { Link } from "react-router-dom";



export default function ListeningAnswerKeyPage() {
  const { listeningData, userAnswers } = useListeningContext();
  const data = flattenListeningTest(listeningData);
  let currentIndex = 1;
  return (
    <CardLayout title={"Practice Test A - Listening Answer Key"} nextLink={"/listening/result"}>
      <div className="p-4">
        <Alert className="flex gap-2 mb-4 border rounded-sm bg-customGray border-customBlue">
          <Badge className="rounded-full bg-customBlue hover:bg-customBlue h-fit">
            NOTE
          </Badge>
          <AlertDescription className="text-gray-600">
            Use the back arrow in your browser to return to the page you just
            came from. The back arrow is located at the top left of your screen,
            next to the address bar.
          </AlertDescription>
        </Alert>

        <Table className="text-sm text-gray-600">
          <TableHeader>
            <TableRow>
              <TableHead>Question</TableHead>
              <TableHead>Answer Key</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => {
              const answerIndex = userAnswers[index];
              const userAnswer =
                item.question.choices && item.question.choices[answerIndex];

              const correctAnswer = item.question.correctAnswer;
              let isCorrect = false;
              if (userAnswer) {
                isCorrect = userAnswer.image
                  ? userAnswer?.image === correctAnswer
                  : userAnswer?.text === correctAnswer;
              }

              const prevItem = data[index - 1];
              if (prevItem && item.title !== prevItem.title) {
                currentIndex = 1;
              }

              return (
                <>
                 {prevItem && item.title !== prevItem.title && <div className="pl-2 my-2 text-sm">
                    <Link
                      to={`/listening/${getActualQuestionIndexListening(listeningData, prevItem.title)?.toString()}`}
                      className="text-customBlue hover:underline"
                    >
                      Return to {prevItem.title}
                    </Link>
                  </div>}
                  <TableRow key={`demo-${index}`}>
                    <TableCell>{`${item.title}- Q${currentIndex++}`}</TableCell>
                    <TableCell>
                      {item.question.choices &&
                      item.question.choices[0].image ? (
                        <img
                          src={item.question.correctAnswer}
                          alt="Correct answer"
                          className="object-cover w-24 h-24"
                        />
                      ) : (
                        item.question.correctAnswer
                      )}
                    </TableCell>
                    <TableCell className="">
                      <div className="flex justify-between">
                        {answerIndex >= 0 &&
                        item.question.choices &&
                        item.question.choices[0].image ? (
                          <>
                            <img
                              src={item.question.choices[answerIndex].image}
                              alt="User answer"
                              className="object-cover w-24 h-24"
                            />
                            {isCorrect ? (
                              <CheckIcon
                                size={20}
                                className="inline-block ml-2 text-green-500"
                              />
                            ) : (
                              <>
                                {answerIndex >= 0 && (
                                  <X
                                    size={20}
                                    className="inline-block ml-2 text-red-500"
                                  />
                                )}
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            {answerIndex >= 0 &&
                              item.question.choices &&
                              item.question.choices[answerIndex].text}
                            {isCorrect ? (
                              <CheckIcon
                                size={20}
                                className="inline-block ml-2 text-green-500"
                              />
                            ) : (
                              <>
                                {answerIndex >= 0 && (
                                  <X
                                    size={20}
                                    className="inline-block ml-2 text-red-500"
                                  />
                                )}
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                    {index === data.length - 1 && <div className="pl-2 my-2 text-sm">
                    <Link
                      to={`/listening/${getActualQuestionIndexListening(listeningData, prevItem.title)?.toString()}`}
                      className="text-customBlue hover:underline"
                    >
                      Return to {prevItem.title}
                    </Link>
                  </div>}
                
                </>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </CardLayout>
  );
}
