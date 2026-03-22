import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/layout/Header";
import { SobreMi } from "./components/features/SobreMi";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Header />
      <main className="flex flex-col bg-(--bg-color)">
        <SobreMi />
      </main>
    </>
  </StrictMode>,
);
