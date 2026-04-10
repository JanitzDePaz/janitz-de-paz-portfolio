import { scrollToId } from "../../animations/scrollToId";
import { headerMenu } from "../../stores/headerStore";

export const ActionButton = ({
  href,
  children,
  className = "",
}: ActionButtonType) => {
  const setMenu = headerMenu((e) => e.setMenu);

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
      onClick={(e) => {
        e.preventDefault();
        scrollToId(href);
        setMenu(false);
      }}
    >
      {children}
    </a>
  );
};
