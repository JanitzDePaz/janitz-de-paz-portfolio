import { useShallow } from "zustand/shallow";
import { projectsData } from "../../constants/projectsData";
import { useProjectStore } from "../../stores/projectStore";

export const ProjectDetails = ({ projectId }: ProjectId) => {
  const project = projectsData.find((proj) => proj.projectId === projectId);
  const moreInfo = useProjectStore((s) => s.moreInfo);
  const setMoreInfo = useProjectStore((s) => s.setMoreInfo);
  console.log(project);

  return (
    <dialog
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12 h-11/12 bg-[#100f0ffa] rounded-4xl p-5 border border-white text-white"
      open={moreInfo}
    >
      <h1>{project?.name}</h1>
      <button className="p-5" onClick={() => setMoreInfo(false)}>X</button>
    </dialog>
  );
};
