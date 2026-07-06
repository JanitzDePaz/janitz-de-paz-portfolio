import { techSection } from "../../constants/techSection";
import { ActionButton } from "../ui/ActionButton";
import { TechCardInteractive } from "../ui/TechCardInteractive";
import { TechCardStatic } from "../ui/TechCardStatic";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { useHeaderStorage } from "../../stores/headerStore";
import { useEffect } from "react";
import { scrollAnimation } from "../../animations/scrollAnimation";
import gsap from "gsap";

export const Techs = () => {
  const width = useHeaderStorage((s) => s.width);

  useEffect(() => {
    const ctx = gsap.context(() => {
      scrollAnimation({
        className: ".techAnim",
        direction: "up",
        distance: 30,
        delay: 1,
        start: "top 85%",
        duration: 1,
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex-col py-10 border-b border-white" id="Tecnologias">
      <div className="flex justify-center items-center flex-wrap gap-2 lg:gap-8 p-5 lg:p-10 w-screen techAnim">
        {techSection.map((obj, i) => {
          if (width > 1024) {
            return (
              <TechCardInteractive
                key={i}
                name={obj.name}
                img={obj.img}
                color={obj.color}
                className="techAnim"
              />
            );
          } else {
            return (
              <TechCardStatic
                key={i}
                name={obj.name}
                img={obj.img}
                color={obj.color}
                className="techAnim"
              />
            );
          }
        })}
      </div>
      <div className="flex flex-col gap-8 justify-center items-center w-fit">
        <ActionButton className="primaryButton" href="#Contacto">
          Conóceme
        </ActionButton>
        <ActionButton className="animate-bounce" href="#Contacto">
          <img src={arrowDown} alt="Flecha direccional" />
        </ActionButton>
      </div>
    </section>
  );
};
