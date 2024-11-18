import { WritingTest } from "@/types/writing";

export const writingData: WritingTest = {
  type: "Writing",
  structure: [
    {
      title: "Writing Test",
      instructions: [
        { text: "Writing Test Instructions" },
        {
          text: "On the official test, if you do not finish Task 1 in 27 minutes, the screen will move to Task 2. You cannot go back to Task 1. However, in this sample test, in order to move forward in the test you must click on NEXT.",
        },
        {
          text: "You have 53 minutes to complete this practice Writing Test. For more information on test format, click here.",
        },
      ],
    },
    {
      title: "Writing Instructional Video",
      instructions: [{ video: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Writing.mp4" }],
    },
    {
      title: "Writing Task 1: Writing an Email",
      instructions: [{ text: "Read the following information." }],
      duration: 1200,
      description:
        "You recently made reservations for dinner at a very famous and expensive restaurant in town. However, the meal and the service were terrible. The restaurant manager was not available to solve the problem, so you left without a resolution.",
      note: "This sample test is not recording your response.",
      questionSets: [
        {
          questions: [
            {
              question:
                "Write an email to the restaurant's manager in about 150-200 words. Your email should do the following things:",
              instructions: [
                {
                  text: "State what problems you had with the food you ordered.",
                },
                { text: "Complain about the service." },
                {
                  text: "Describe how you want the restaurant to resolve the problem to your satisfaction.",
                },
              ],
              type: "simple",
              score: 10,
            },
          ],
        },
      ],
    },
    {
      title: "Writing Task 2: Responding to Survey Questions",
      instructions: [{ text: "Read the following information." }],
      duration: 1200,
      description:
        "markdown or text here: City Development Survey You live in a small town of 10,000 people. A large green area in the centre of town is undeveloped. The city has sent out an opinion survey to see what residents would like to have built in that area.",
      note: "This sample test is not recording your response.",
      questionSets: [
        {
          questions: [
            {
              question:
                "Choose the option that you prefer. Why do you prefer your choice? Explain the reasons for your choice. Write about 150-200 words.",
              choices: [
                {
                  text: "Option A: Shopping Complex: This shopping mall would include restaurants, a large supermarket, and a movie theatre.",
                },
                {
                  text: "Option B: Recreational Park: This park would include a sports complex, a large green area, and a small petting zoo.",
                },
              ],
              score: 10,
              type: "mcq",
              correctAnswer: "Answer",
            },
          ],
        },
      ],
    },
  ],
};

export const writingEndPage = {
  
}