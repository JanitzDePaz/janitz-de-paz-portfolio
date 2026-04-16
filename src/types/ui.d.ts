type SpotlightTypes = {
  color: string;
  size: string;
  position: string;
};
type ActionButtonType = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};
type TitlesTypes = {
  children: React.ReactNode;
  className?: string;
};

type ProjectCardTypes = {
  projectId: number;
  name: string;
  description: string;
  mediaType: "video" | "image";
  media: string;
  mediaAlt: string;
  GitHub: ProjectCardLink;
};

type ProjectId = {
  projectId: number
}

type ProjectInfoType = {
  projectId: number;
  name: string;
  media: string;
  mediaType: "video" | "image";
  description: string;
  learning: string;
  challenges: string[];
  tech: string[];
  GitHub: GitHubData;
};

type GitHubData = {
  text: string;
  url: string;
};
