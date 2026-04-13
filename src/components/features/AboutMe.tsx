import { aboutMeTech } from "../../constants/aboutMeTech";
import { ActionButton } from "../ui/ActionButton";
import { Title } from "../ui/Title";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { useEffect } from "react";
import { puzzleAnimation } from "../../animations/puzzleAnimation";
import { scrollAnimation } from "../../animations/scrollAnimation";
import gsap from "gsap";

export const AboutMe = () => {
  useEffect(() => {
    const ctx = puzzleAnimation();
    const close = gsap.context(() => {
      scrollAnimation({
        className: ".aboutMeAnim",
        direction: "up",
        distance: 30,
        start: "top 85%",
        stagger: 0.2,
      });
    });
    return () => {
      ctx.revert();
      close.revert();
    };
  }, []);
  return (
    <section className="aboutMeBg" id="SobreMi">
      <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-15 lg:gap-20">
        <div className="text-center lg:text-left flex flex-col gap-10 w-2/3 lg:w-4/12">
          <Title className="aboutMeAnim">Sobre mi</Title>
          <p className="text-lg aboutMeAnim">
            Estudiante de 1º de DAW apasionado por el desarrollo web Full-stack.
            Enfocado en construir soluciones escalables con React y TypeScript,
            priorizando siempre la calidad del código y la arquitectura limpia.
          </p>
          <hr className="hidden lg:block aboutMeAnim" />
          <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:justify-center lg:items-center w-fit m-auto">
            <div className="aboutMeAnim">
              <ActionButton className="primaryButton" href="#Proyectos">
                Mis proyectos
              </ActionButton>
            </div>
            <div className="aboutMeAnim">
              <ActionButton className="animate-bounce" href="#Proyectos">
                <img src={arrowDown} alt="Flecha direccional" />
              </ActionButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-5 aboutMeAnim">
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
          <ActionButton className="primaryButton" href="#Proyectos">
            Mis proyectos
          </ActionButton>
          <ActionButton className="animate-bounce" href="#Proyectos">
            <img src={arrowDown} alt="Flecha direccional" />
          </ActionButton>
        </div>
      </div>
    </section>
  );
};
