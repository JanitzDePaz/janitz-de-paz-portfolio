import { projectsData } from "../../constants/projectsData";
import { useProjectStore } from "../../stores/projectStore";
import githubIcon from "../../assets/icons/githubIcon.svg";
import webIcon from "../../assets/icons/webIcon.svg";

export const ProjectDetails = ({ projectId }: ProjectId) => {
  const project = projectsData.find((proj) => proj.projectId === projectId);
  const moreInfo = useProjectStore((s) => s.moreInfo);
  const setMoreInfo = useProjectStore((s) => s.setMoreInfo);
  console.log(project);

  return !project || !moreInfo ? null : (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[80vw] h-[80vh] bg-[#100f0ffa] rounded-4xl border border-white text-white flex justify-center items-center p-10">
      <div className="h-full relative grid grid-cols-3 gap-15 p-10">
        <div className="flex flex-col gap-5">
          {project.mediaType === "image" ? (
            <img
              src={project.media}
              alt={`${project.name} image`}
              className="aspect-video"
            />
          ) : (
            <video src={project.media} className="aspect-video" />
          )}
          <h1 className="text-4xl">{project.name}</h1>
          <div className="flex w-full flex-1 justify-center items-center">
            <a href={project.GitHub.url} className="w-30">
              <img src={githubIcon} alt="GitHub icon" />
            </a>
            {project.webPage == null ? null : (
              <a href={project.webPage} className="w-1/3">
                <img src={webIcon} alt="WebPage icon" className="w-full" />
              </a>
            )}
          </div>
        </div>
        <div className="col-span-2 h-8/9 mx-20 flex flex-col gap-10 overflow-y-auto">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl">Descripcion</h2>
            <p>{project.description}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl">Aprendizaje</h2>
            <p>{project.learning}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl">Retos</h2>
            <ol className="flex flex-col gap-2 list-disc mx-10">
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex gap-5 text-center col-span-3 mx-auto">
          {project.tech.map((tech, i) => (
            <div key={i} className="flex flex-col">
              <img src={tech.img} alt={`${tech.name} icon`} className="h-20 w-20 bg-gray-400 rounded-xl aspect-square object-contain" />
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
        <button
          className="border absolute top-0 right-0 rounded-4xl aspect-square w-15"
          onClick={() => setMoreInfo(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};
