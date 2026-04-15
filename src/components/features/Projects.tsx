import { Title } from "../ui/Title";
import { projectsData } from "../../constants/projectsData";
import { ProjectCard } from "../ui/ProjectCard";

export const Project = () => {
  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center gap-10 md:gap-20 lg:gap-30 p-5 lg:p-15">
        <Title>Proyectos</Title>
        <div className="flex w-full flex-wrap justify-center gap-10 lg:gap-20 xl:gap-50 ">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              mediaType={project.mediaType == "image" ? "image" : "video"}
              media={project.media}
              mediaAlt={`${project.name} preview`}
              GitHub={{ text: project.GitHub.text, url: project.GitHub.url }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
