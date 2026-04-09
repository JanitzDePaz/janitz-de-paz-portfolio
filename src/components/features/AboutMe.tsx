import { aboutMeTech } from "../../constants/aboutMeTech";
import { PrimaryButton } from "../ui/PrimaryButton";
import { Title } from "../ui/Title";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { useEffect } from "react";
import { puzzleAnimation } from "../../animations/puzzleAnimation";

export const AboutMe = () => {
  useEffect(() => {
    const ctx = puzzleAnimation();
    return () => ctx.revert();
  }, []);
  return (
    <section className="aboutMeBg" id="SobreMi">
      <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-15 lg:gap-20">
        <div className="text-center lg:text-left flex flex-col gap-10 w-2/3 lg:w-4/12">
          <Title>Sobre mi</Title>
          <p className="text-lg">
            Estudiante de 1º de DAW apasionado por el desarrollo web Full-stack.
            Enfocado en construir soluciones escalables con React y TypeScript,
            priorizando siempre la calidad del código y la arquitectura limpia.
          </p>
          <hr className="hidden lg:block" />
          <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:justify-center lg:items-center w-fit m-auto">
            <PrimaryButton className="" href="#SobreMi">
              Mis proyectos
            </PrimaryButton>
            <a href="#SobreMi" className="animate-bounce">
              <img src={arrowDown} alt="Flecha direccional" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-5">
          {aboutMeTech.map((icon) => (
            <img
              key={icon.name}
              alt={icon.alt}
              src={icon.url}
              className="w-18 h-18 lg:w-28 lg:h-28 object-contain puzzleAnim p-2"
            />
          ))}
        </div>
        <div className="lg:hidden flex flex-col gap-5 justify-center items-center w-fit">
          <PrimaryButton href="#SobreMi">Mis proyectos</PrimaryButton>
          <a href="#SobreMi" className="animate-bounce">
            <img src={arrowDown} alt="Flecha direccional" />
          </a>
        </div>
      </div>
    </section>
  );
};
