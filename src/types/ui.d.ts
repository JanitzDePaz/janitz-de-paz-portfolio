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
  otherLink?: ProjectCardLink;
  className?: string;
};

type ProjectId = {
  projectId: number;
};

type GitHubData = {
  text: string;
  url: string;
};

type TechCardsType = {
  name: string;
  img: string;
  color: string;
};

type SocialLinkType = {
  src: string;
  href: string;
};
