import { projectsData } from "../../constants/projectsData";
import { useProjectStore } from "../../stores/projectStore";
import githubIcon from "../../assets/icons/githubIcon.svg";
import webIcon from "../../assets/icons/webIcon.svg";
import { ActionButton } from "./ActionButton";
import { useHeaderStorage } from "../../stores/headerStore";
import crossIcon from "../../assets/icons/closeCross.svg";
import { useEffect } from "react";

export const ProjectDetails = ({ projectId }: ProjectId) => {
  const project = projectsData.find((proj) => proj.projectId === projectId);
  const moreInfo = useProjectStore((s) => s.moreInfo);
  const setMoreInfo = useProjectStore((s) => s.setMoreInfo);
  const width = useHeaderStorage((s) => s.width);

  useEffect(() => {
    if (moreInfo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return !project || !moreInfo ? null : (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] lg:w-[90vw] xl:w-[90vw] h-10/12  xl:h-[80vh] bg-[#100f0ffc] rounded-4xl border border-white text-white flex justify-center items-center p-10">
      <div className="h-full relative flex justify-center items-center gap-5 flex-wrap overflow-y-auto border-t-60 border-t-transparent bg-clip-padding lg:overflow-y-visible lg:border-t-0">
        {width > 1024 ? (
          <div className="flex flex-col w-4/12">
            {project.mediaType === "image" ? (
              <img
                src={project.media}
                alt={`${project.name} image`}
                className="aspect-video w-full"
              />
            ) : (
              <video src={project.media} className="aspect-video" />
            )}

            <div className="flex flex-wrap justify-center items-center gap-5 py-10">
              <ActionButton
                href={project.GitHub.url}
                className="flex justify-center items-center gap-5 py-6 px-10 h-15 w-50 border border-gray-700 bg-gray-800/50 rounded-xl"
              >
                <img src={githubIcon} alt="GitHub icon" className="w-10" />
                <p>GitHub</p>
              </ActionButton>
              {project.webPage == null ? null : (
                <ActionButton
                  href={project.webPage}
                  className="flex justify-center items-center gap-5 py-6 px-10 h-15 w-50 border border-gray-700 bg-gray-800/50 rounded-xl"
                >
                  <img src={webIcon} alt="WebPage icon" className="w-10" />
                  <p>Web</p>
                </ActionButton>
              )}
            </div>
          </div>
        ) : null}

        <div className="w-10/12 lg:w-6/12 flex flex-col gap-10 mx-10 lg:h-7/12">
          <h1 className="text-5xl font-bold">{project.name}</h1>
          <div className="flex flex-col gap-7 lg:overflow-y-auto ">
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
        </div>
        {width < 1024 ? (
          <div className="flex flex-col w-10/12">
            {project.mediaType === "image" ? (
              <img
                src={project.media}
                alt={`${project.name} image`}
                className="aspect-video w-full"
              />
            ) : (
              <video src={project.media} className="aspect-video" />
            )}

            <div className="flex flex-wrap justify-center items-center gap-5 py-10">
              <ActionButton
                href={project.GitHub.url}
                className="flex justify-center items-center gap-5 py-6 px-10 h-15 w-50 border border-gray-700 bg-gray-800/50 rounded-xl"
              >
                <img src={githubIcon} alt="GitHub icon" className="w-10" />
                <p>GitHub</p>
              </ActionButton>
              {project.webPage == null ? null : (
                <ActionButton
                  href={project.webPage}
                  className="flex justify-center items-center gap-5 py-6 px-10 h-15 w-50 border border-gray-700 bg-gray-800/50 rounded-xl"
                >
                  <img src={webIcon} alt="WebPage icon" className="w-10" />
                  <p>Web</p>
                </ActionButton>
              )}
            </div>
          </div>
        ) : null}
        <div className="flex flex-wrap gap-3 justify-center items-center self-center w-full">
          {project.tech.map((tech, i) => (
            <div
              key={i}
              className="h-25 px-4 py-3 rounded-2xl flex flex-col gap-2 items-center justify-center border border-gray-700 bg-gray-800/50 shadow-xl"
            >
              <img
                src={tech.img}
                alt={`${tech.name} icon`}
                className="h-full w-auto max-h-20 max-w-26 object-contain"
              />
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
        <button
          className="fixed top-10 right-10 cursor-pointer"
          onClick={() => setMoreInfo(false)}
          aria-label="ProjectDetailsCloseButton"
        >
          <img src={crossIcon} alt="Cross icon" className="w-6" />
        </button>
      </div>
    </div>
  );
};
