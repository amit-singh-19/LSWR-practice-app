import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ListeningProvider } from "./context/ListeningContext.tsx";
import { ReadingProvider } from "./context/ReadingContext.tsx";
import { WritingProvider } from "./context/WritingContext.tsx";
import { SpeakingProvider } from "./context/SpeakingContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ListeningProvider>
      <ReadingProvider>
        <WritingProvider>
          <ReadingProvider>
            <SpeakingProvider>
              <App />
            </SpeakingProvider>
          </ReadingProvider>
        </WritingProvider>
      </ReadingProvider>
    </ListeningProvider>
  </StrictMode>
);
