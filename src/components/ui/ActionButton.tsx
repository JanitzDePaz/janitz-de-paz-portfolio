import { scrollToId } from "../../animations/scrollToId";
import { useHeaderStorage } from "../../stores/headerStore";

export const ActionButton = ({
  href,
  children,
  className = "",
}: ActionButtonType) => {
  const setMenu = useHeaderStorage((e) => e.setMenu);

  return href == null || href == "" ? (
    <button
      className={className}
      onClick={() => {
        setMenu(false);
      }}
    >
      {children}
    </button>
  ) : (
    <a
      href={href}
      className={className}
      target={href.charAt(0) === "#" ? "" : "_blank"}
      onClick={(e) => {
        if (href.charAt(0) === "#") {
          e.preventDefault();
          scrollToId(href);
          setMenu(false);
        }
      }}
    >
      {children}
    </a>
  );
};
