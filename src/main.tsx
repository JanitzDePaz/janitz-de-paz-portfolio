import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/layout/header/Header";
import { Hero } from "./components/features/Hero";

createRoot(document.getElementById("root")!).render(
  <>
    <Header />
    <main className="flex flex-col bg-(--bg-color) pt-(--header-height)">
      <Hero />
    </main>
  </>,
);
