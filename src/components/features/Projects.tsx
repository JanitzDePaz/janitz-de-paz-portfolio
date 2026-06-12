import { Title } from "../ui/Title";
import { projectsData } from "../../constants/projectsData";
import { ProjectCard } from "../ui/ProjectCard";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { scrollAnimation } from "../../animations/scrollAnimation";
import { ActionButton } from "../ui/ActionButton";
import arrowDown from "../../assets/icons/arrowDown.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";

export const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProjects = projectsData.length;
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      scrollAnimation({
        className: ".topAnim",
        direction: "up",
        distance: 70,
        delay: 0.2,
        start: "top 85%",
        duration: 1.5,
        stagger: 0.3,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.children;

    Array.from(cards).forEach((card, index) => {
      let offset = index - activeIndex;

      if (offset < -totalProjects / 2) offset += totalProjects;
      if (offset > totalProjects / 2) offset -= totalProjects;

      const isActive = offset === 0;
      const targetX = offset * 120;

      const currentX = Number(gsap.getProperty(card, "xPercent")) || 0;
      const isCrossing = Math.abs(targetX - currentX) > 150;

      if (isCrossing) {
        gsap.set(card, { xPercent: targetX });
      }
      gsap.to(card, {
        xPercent: targetX,
        scale: isActive ? 1 : 0.82,
        opacity: isActive ? 1 : 0.3,
        filter: isActive ? "blur(0px)" : "blur(3px)",
        zIndex: isActive ? 10 : 1,
        duration: 0.6,
        y: isActive ? 0 : -100,
        ease: "power3.out",
      });
    });
  }, [activeIndex, totalProjects]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  return (
    <section id="Proyectos" className="relative border-b border-white">
      <div className="w-full h-screen flex flex-col items-center justify-center gap-10 py-10">
        <Title className="topAnim">Proyectos</Title>
        <div className="w-full flex justify-center items-center flex-1 gap-5">
          <button onClick={handlePrev} className="w-10 h-10">
            <img src={arrowLeft} alt="left arrow" className="w-full h-full" />
          </button>
          <div className="relative w-100 h-140" ref={containerRef}>
            {projectsData.map((project) => {
              return (
                <div
                  className="absolute inset-0 w-full h-full"
                  key={project.projectId}
                >
                  <ProjectCard
                    projectId={project.projectId}
                    name={project.name}
                    description={project.description}
                    mediaType={project.mediaType == "image" ? "image" : "video"}
                    media={project.media}
                    mediaAlt={`${project.name} preview`}
                    GitHub={{
                      text: project.GitHub.text,
                      url: project.GitHub.url,
                    }}
                    otherLink={{
                      text: project.otherLink?.text,
                      url: project.otherLink?.url,
                    }}
                    className="topAnim"
                  />
                </div>
              );
            })}
          </div>
          <button onClick={handleNext} className="w-10 h-10">
            <img src={arrowRight} alt="right arrow" className="w-full h-full" />
          </button>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center w-fit">
          <ActionButton className="primaryButton" href="#Tecnologias">
            Tecnologias
          </ActionButton>
          <ActionButton className="animate-bounce" href="#Tecnologias">
            <img src={arrowDown} alt="Flecha direccional" />
          </ActionButton>
        </div>
      </div>
    </section>
  );
};
