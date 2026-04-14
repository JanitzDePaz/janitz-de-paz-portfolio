import { ActionButton } from "./ActionButton";

export const ProjectCard = ({
  name,
  description,
  mediaType,
  media,
  mediaAlt,
  GitHub,
}: ProjectCardTypes) => {
  return (
    <article className="w-120 rounded-4xl bg-white text-black flex flex-col">
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
            <h2 className="text-2xl font-medium">{name}</h2>
            <p className="flex-1">{description}</p>
          </div>

          <div className="flex justify-center border-t border-t-gray-200 py-4 text-center">
            <ActionButton
              href={GitHub.url}
              className="py-4 px-6 bg-black text-white rounded-xl flex-1 mx-4"
            >
              {GitHub.text}
            </ActionButton>
            <ActionButton className="py-3 px-6 border border-gray-400 text-black rounded-xl flex-1 mx-4">
              Más información
            </ActionButton>
          </div>
        </div>
      </div>
    </article>
  );
};
