import { projectsData } from "../../constants/projectsData";

export const ProjectDetails = ({ projectId }: ProjectId) => {
  const project = projectsData.find((proj) => proj.projectId === projectId);

  console.log(project);
  return <dialog className="absolute w-11/12"></dialog>;
};
