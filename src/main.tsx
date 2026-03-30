import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/layout/header/Header";

createRoot(document.getElementById("root")!).render(
  <>
    <Header />
    <main className="flex flex-col bg-(--bg-color)"></main>
  </>,
);
