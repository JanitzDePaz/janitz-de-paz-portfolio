import GitHubIcon from "../../../assets/icons/githubSquareIcon.svg";
import LinkedInIcon from "../../../assets/icons/linkedInIcon.svg";
import { SocialLink } from "../../ui/SocialLink";
export const Footer = () => {
  return (
    <footer className="flex justify-between px-10 xl:px-20 items-center py-1 bg-[#1b1b1d] border-t-2 border-(--primary-border)">
      <div className="flex gap-4">
        <SocialLink src={GitHubIcon} href="https://github.com/JanitzDePaz" />
        <SocialLink
          src={LinkedInIcon}
          href="https://linkedin.com/in/janitz-de-paz"
        />
      </div>
      <div>Janitz de Paz — Portfolio 2026</div>
    </footer>
  );
};
