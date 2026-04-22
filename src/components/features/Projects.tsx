import { Title } from "../ui/Title";
import { projectsData } from "../../constants/projectsData";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectDetails } from "../ui/ProjectDetails";
import { useProjectStore } from "../../stores/projectStore";
import { useEffect } from "react";
import gsap from "gsap";
import { scrollAnimation } from "../../animations/scrollAnimation";

export const Project = () => {
  const selectedProject = useProjectStore((s) => s.selectedProject);
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
    <section id="Proyectos" className="relative">
      <div className="w-full flex flex-col items-center justify-center gap-10 md:gap-20 lg:gap-30 p-5 lg:p-15">
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
                className="topAnim"
              />
            );
          })}
        </div>
      </div>
      <ProjectDetails projectId={selectedProject} />
    </section>
  );
};
