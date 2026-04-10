import { scrollToId } from "../../animations/scrollToId";
import { headerMenu } from "../../stores/headerStore";

export const ActionButton = ({
  href,
  children,
  className = "",
}: ActionButtonType) => {
  const setMenu = headerMenu((e) => e.setMenu);
  if (href == null || href == "") {
    return (
      <button
        className={className}
        onClick={() => {
          setMenu(false);
        }}
      >
        {children}
      </button>
    );
  }

  return (
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
