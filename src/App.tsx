import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import Test from "./pages/home/test";
import VideoInstruction from "./components/video-instruction";
import listeningTestMockData from "./data/listeningTest";
import { readingTestMockData } from "./data/readingTest";
import { speakingTestData } from "./data/speakingTest";
import { completeTestData } from "./data/completeTest";
import EndPage from "./components/end-page";
import ReadingAnswerKey from "./pages/reading/components/reading-answer-key";
import Writing from "./pages/writing/writing";
import Listening from "./pages/listening/listening";
import ListeningAnswerKeyPage from "./pages/listening/components/answer-key";
import Reading from "./pages/reading/reading";
import ListeningResult from "./pages/listening/components/result";
import ReadingResult from "./pages/reading/components/reading-result-page";
import Speaking from "./pages/speaking/speaking";
import Dashboard from "./pages/dashboard";
import AuthForm from "./pages/auth/auth";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthForm />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/test",
        element: <Test />,
      },

      {
        path: "/listening/:sectionId",
        element: <Listening />,
      },
      {
        path: "/listening/answer-key",
        element: <ListeningAnswerKeyPage />,
      },
      {
        path: "/listening/result",
        element: <ListeningResult />,
      },
      {
        path: "/listening/end-page",
        element: (
          <EndPage
            title={listeningTestMockData.endPage.title}
            instructions={listeningTestMockData.endPage.instruction}
            nextLink="/reading/1"
          />
        ),
      },

      // reading
      {
        path: "/reading/:sectionId",
        element: <Reading />,
      },
      {
        path: "/reading/end-page",
        element: (
          <EndPage
            title={readingTestMockData.endPage.title}
            instructions={readingTestMockData.endPage.instruction}
            nextLink="/writing/1"
          />
        ),
      },
      {
        path: "/reading/answer-key",
        element: <ReadingAnswerKey />,
      },
      {
        path: "/reading/result",
        element: <ReadingResult />,
      },

      // Writing
      {
        path: "/writing/:sectionId",
        element: <Writing />,
      },

      {
        path: "/writing/end-page",
        element: (
          <EndPage
            title={readingTestMockData.endPage.title}
            instructions={readingTestMockData.endPage.instruction}
            nextLink="/speaking/1"
          />
        ),
      },

      // Speaking
      {
        path: "/speaking/:sectionId",
        element: <Speaking />,
      },
      {
        path: "/speaking/end-page",
        element: (
          <EndPage
            title={speakingTestData.endPage.title}
            instructions={speakingTestData.endPage.instruction}
            nextLink="/"
          />
        ),
      },

      // complete
      {
        path: "/complete-test",
        element: (
          <VideoInstruction
            nextLink="/listening/1"
            title="Overview Instructional Video"
            prevLink="/"
            videoSrc={completeTestData.videoUrl}
          />
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
