import { useEffect } from "react";
import arrowDown from "../../assets/icons/arrowDown.svg";
import { PrimaryButton } from "../ui/PrimaryButton";
import { Spotlight } from "../ui/Spotlight";
import { scrollAnimation } from "../../animations/scrollAnimation";
import { gsap } from "gsap";
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
    <section className="flex justify-center items-center text-center overflow-hidden relative">
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-3xl sm:text-5xl xl:text-6xl title anim">
          Janitz De Paz
        </h1>
        <h2 className="text-xl sm:text-3xl xl:text-4xl text-(--accent) subtitle anim">
          React & TypeScript <br /> developer
        </h2>
        <div className="anim">
          <PrimaryButton href="#SobreMi">Conóceme</PrimaryButton>
        </div>
        <a href="#SobreMi" className="anim animate-bounce">
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
