import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/layout/Header";
import { AboutMe } from "./components/features/AboutMe";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Header />
      <main className="flex flex-col bg-(--bg-color)">
        <AboutMe />
      </main>
    </>
  </StrictMode>,
);
