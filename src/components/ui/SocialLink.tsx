export const SocialLink = ({ src, href }: FooterLinkType) => (
  <a
    href={href}
    className="bg-black h-12 w-12 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800"
    target="_blank"
  >
    <img
      src={src}
      alt="Github icon"
      rel="noreferrer"
      className="w-6 h-6 object-contain"
    />
  </a>
);
