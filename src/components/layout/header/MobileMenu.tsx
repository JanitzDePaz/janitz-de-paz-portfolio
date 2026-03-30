import clsx from "clsx";
import { headerItems } from "../../../constants/headerItems";
import { headerMenu } from "../../../stores/headerStore";

export const MobileMenu = () => {
  const openMenu = headerMenu((e) => e.openMenu);
  return (
    <nav
      className={clsx(
        "absolute w-screen bg-red-50 duration-300",
        openMenu ? "translate-y-full" : "-translate-y-full bg-amber-200",
      )}
    >
      <ul className="flex flex-col">
        {headerItems.map((item) => (
          <li
            key={item.id}
            className="text-(--text-muted) hover:text-(--text-main)"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
