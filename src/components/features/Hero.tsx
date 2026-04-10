import { useEffect } from "react";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { ActionButton } from "../ui/ActionButton";
import { Spotlight } from "../ui/Spotlight";
import { scrollAnimation } from "../../animations/scrollAnimation";
import { gsap } from "gsap";
import { Title } from "../ui/Title";
import { Subtitle } from "../ui/Subtitle";

export const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      scrollAnimation({
        className: ".anim",
        direction: "up",
        distance: 30,
        delay: 0.2,
        start: "top 85%",
        duration: 1,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="text-center relative" id="Inicio">
      <div className="flex flex-col gap-8 justify-center items-center">
        <Title className="anim">Janitz De Paz</Title>
        <Subtitle className="anim">
          React & TypeScript <br /> developer
        </Subtitle>
        <div className="anim">
          <ActionButton className="primaryButton" href="#SobreMi">
            Conóceme
          </ActionButton>
        </div>
        <ActionButton href="#SobreMi" className="anim animate-bounce">
          <img src={arrowDown} alt="Flecha direccional" />
        </ActionButton>
      </div>
      <Spotlight
        color="bg-sky-500/60"
        position="top-40 lg:top-20 -right-18 lg:right-10"
        size="w-36 h-36 lg:w-60 lg:h-60"
      />
      <Spotlight
        color="bg-sky-500/60"
        position="bottom-40 lg:bottom-30 -left-18 lg:left-0"
        size="w-36 h-36 lg:w-60 lg:h-60"
      />
    </section>
  );
};
