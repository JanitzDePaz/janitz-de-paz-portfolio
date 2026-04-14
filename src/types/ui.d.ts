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
  name: string;
  description: string;
  mediaType: "video" | "image"
  media: string;
  mediaAlt: string;
  GitHub: ProjectCardLink;
};

type GitHubData = {
  text: string;
  url: string
}