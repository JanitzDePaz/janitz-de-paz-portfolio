import { Title } from "../ui/Title";
import { projectsData } from "../../constants/projectsData";
import { ProjectCard } from "../ui/ProjectCard";
import { useEffect } from "react";
import gsap from "gsap";
import { scrollAnimation } from "../../animations/scrollAnimation";
import { ActionButton } from "../ui/ActionButton";
import arrowDown from "../../assets/icons/arrowDown.svg";

export const Project = () => {
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

  return (
    <section id="Proyectos" className="relative border-b border-white">
      <div className="w-full flex flex-col items-center justify-center gap-10 py-10 ">
        <Title className="topAnim">Proyectos</Title>
        <div className="flex w-full flex-wrap justify-center gap-10 lg:gap-20 xl:gap-50 ">
          {projectsData.map((project) => {
            return (
              <ProjectCard
                key={project.projectId}
                projectId={project.projectId}
                name={project.name}
                description={project.description}
                mediaType={project.mediaType == "image" ? "image" : "video"}
                media={project.media}
                mediaAlt={`${project.name} preview`}
                GitHub={{ text: project.GitHub.text, url: project.GitHub.url }}
                otherLink={{
                  text: project.otherLink?.text,
                  url: project.otherLink?.url
                }}
                className="topAnim"
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5 justify-center items-center w-fit">
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
