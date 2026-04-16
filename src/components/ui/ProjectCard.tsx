import { projectStore } from "../../stores/projectStore";
import { ActionButton } from "./ActionButton";

export const ProjectCard = ({
  name,
  description,
  mediaType,
  media,
  mediaAlt,
  GitHub,
}: ProjectCardTypes) => {
  const { setMoreInfo } = projectStore((s) => ({setMoreInfo : s.setMoreInfo}))
  return (
    <article className="w-70 sm:w-80 lg:90 xl:w-100 rounded-4xl bg-white text-black flex flex-col">
      <div className="p-6 flex flex-col h-full">
        {mediaType == "image" ? (
          <img
            src={media}
            alt={mediaAlt}
            className="rounded-t-4xl aspect-video"
          />
        ) : (
          <video src={media} className="rounded-t-4xl aspect-video" />
        )}
        <div className="border border-gray-200 rounded-b-4xl flex-1 flex flex-col gap-3">
          <div className="p-6 flex-1 flex flex-col gap-4">
            <h2 className="text-sm lg:text-2xl font-medium">{name}</h2>
            <p className="flex-1 text-xs">{description}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 justify-center border-t border-t-gray-200 py-4 text-center">
            <ActionButton
              href={GitHub.url}
              className="py-4 px-6 bg-black text-gray-200 hover:text-white rounded-xl flex-1 mx-2 text-sm xl:text-lg hover:bg-gray-800"
            >
              {GitHub.text}
            </ActionButton>
            <button className="py-3 px-6 border border-gray-400 text-black mx-2 rounded-xl flex-1 text-sm xl:text-lg duration-200 hover:bg-gray-300" onClick={() => setMoreInfo(true)}>
              Leer más
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
