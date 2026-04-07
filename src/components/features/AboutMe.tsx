import { aboutMeTech } from "../../constants/aboutMeTech";
import { PrimaryButton } from "../ui/PrimaryButton";
import { Title } from "../ui/Title";
import arrowDown from "../../assets/icons/arrowDown.svg";

export const AboutMe = () => (
  <section className="text-center dotBackgorund" id="SobreMi">
    <div className="flex flex-col justify-center items-center gap-8 w-4/5">
      <Title>Sobre mi</Title>
      <p className="text-lg w-4/5">
        Estudiante de 1º de DAW apasionado por el desarrollo web Full-stack.
        Enfocado en construir soluciones escalables con React y TypeScript,
        priorizando siempre la calidad del código y la arquitectura limpia.
      </p>
      <div className="p-10 grid grid-cols-3 grid-rows-2 gap-5">
        { aboutMeTech.map((icon) => (
          <img key={icon.name} alt={icon.alt} src={icon.url} className="w-full aspect-square"/>
        ))}
      </div>
      <PrimaryButton href="#SobreMi">Mis proyectos</PrimaryButton>
      <a href="#SobreMi" className="anim animate-bounce">
          <img src={arrowDown} alt="Flecha direccional" />
        </a>
    </div>
  </section>
);
