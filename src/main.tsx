import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/layout/header/Header";
import { Hero } from "./components/features/Hero";
import { AboutMe } from "./components/features/AboutMe";
import { Project } from "./components/features/Projects";
import { Techs } from "./components/features/Techs";
import { Contact } from "./components/features/Contact";
import { Footer } from "./components/layout/footer/Footer";

createRoot(document.getElementById("root")!).render(
  <>
    <head>
      <link rel="icon" type="image/x-icon" href="/icons/reactIcon.svg" />
    </head>
    <Header />
    <main className="flex flex-col bg-(--bg-color) pt-(--header-height)">
      <Hero />
      <AboutMe />
      <Project />
      <Techs />
      <Contact />
    </main>
    <Footer />
  </>,
);
