import arrowDown from "../../assets/icons/arrowDown.svg";
import { Spotlight } from "../ui/Spotlight";
export const Hero = () => {
  return (
    <section className="flex justify-center items-center text-center relative">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl title">Janitz De Paz</h1>
        <h2 className="text-3xl text-(--accent)  subtitle">
          React & TypeScript <br /> developer
        </h2>
        <a href="#SobreMi" className="primary-btn transition-colors">
          <button>Conoceme</button>
        </a>
        <a href="#SobreMi">
          <img src={arrowDown} alt="Flecha direccional" />
        </a>
      </div>
      <Spotlight
        color="bg-sky-500/20"
        position="top-20 right-0"
        size="w-36 h-36 lg:w-72 lg:h-72"
      />
      <Spotlight
        color="bg-sky-500/20"
        position="bottom-20 left-0"
        size="w-36 h-36 lg:w-72 lg:h-72"
      />
    </section>
  );
};
