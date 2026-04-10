import clsx from "clsx";
import { headerItems } from "../../../constants/headerItems";
import { headerMenu } from "../../../stores/headerStore";
import { useShallow } from "zustand/shallow";
import { scrollToId } from "../../../animations/scrollToId";

export const MobileMenu = () => {
  const { openMenu, setMenu}  = headerMenu(useShallow((s) => ({openMenu: s.openMenu, setMenu: s.setMenu})));

  return (
    <nav
      className={clsx(
        "absolute bottom-0 left-0 w-screen transition-transform duration-300 will-change-transform z-40 bg-(--header-bg) border-b border-(--primary-border)",
        openMenu ? "translate-y-full" : "translate-y-0",
      )}
    >
      <ul className="flex flex-col gap-2 p-5">
        {headerItems.map((item) => (
          <li
            key={item.id}
            className="text-(--text-muted) hover:text-(--text-main)"
          >
            <a
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(item.link);
                setMenu(false);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
