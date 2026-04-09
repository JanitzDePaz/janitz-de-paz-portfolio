import { scrollToId } from "../../animations/scrollToId";

export const ActionButton = ({
  href,
  children,
  className = "",
}: ActionButtonType) => {
  if (href == null || href == "") {
    return <button className={className}>{children}</button>;
  }

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault(); // Evita que el navegador salte de golpe
        scrollToId(href);
      }}
    >
      {children}
    </a>
  );
};
