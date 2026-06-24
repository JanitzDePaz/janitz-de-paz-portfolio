import { ActionButton } from "./ActionButton";

export const ProjectCard = ({
  projectId,
  name,
  description,
  mediaType,
  media,
  mediaAlt,
  GitHub,
  otherLink,
  className,
}: ProjectCardTypes) => {
  return (
    <article key={projectId}
      className={`w-full h-full rounded-4xl bg-white text-black flex flex-col ${className}`}
    >
      <div className="p-6 flex flex-col h-full">
        {mediaType == "image" ? (
          <img
            src={media}
            alt={mediaAlt}
            className="rounded-t-4xl"
          />
        ) : (
          <video src={media} className="rounded-t-4xl aspect-video" />
        )}
        <div className="border border-gray-200 rounded-b-4xl flex-1 flex flex-col gap-3">
          <div className="p-6 flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-medium">{name}</h2>
            <p className="flex-1 text-sm">{description}</p>
          </div>

          <div className="flex flex-row gap-3 justify-center border-t border-t-gray-200 py-4 text-center">
            <ActionButton
              href={GitHub.url}
              className="py-4 px-6 bg-black text-gray-200 hover:text-white rounded-xl flex-1 mx-2 text-sm xl:text-lg hover:bg-gray-800"
            >
              {GitHub.text}
            </ActionButton>
            {otherLink.text == null ? null : (
              <ActionButton
                href={otherLink.url}
                className="py-4 px-6 bg-white text-black border border-gray-300 rounded-xl flex-1 mx-2 text-sm xl:text-lg hover:bg-gray-200"
              >
                {otherLink.text}
              </ActionButton>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
