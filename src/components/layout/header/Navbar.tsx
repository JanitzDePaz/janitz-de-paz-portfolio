import { headerItems } from "../../../constants/headerItems";
import squarePlaceholder from "../../../assets/placeholders/squarePlaceholder.png";
import headerMenuButton from "../../../assets/icons/headerMenu.svg";
import { headerMenu } from "../../../stores/headerStore";
import clsx from "clsx";
import { useShallow } from "zustand/shallow";
import { scrollToId } from "../../../animations/scrollToId";

export const Navbar = () => {
  const width = headerMenu(useShallow((s) => s.width));
  const toggleMenu = () => headerMenu.getState().toggleMenu();
  const mobileWidth = headerMenu.getState().mobileWidth
  return (
    <div className="relative h-(--header-height) w-full bg-(--header-bg) flex justify-around items-center border-b border-(--primary-border) z-50">
      <div className="h-4/5 flex items-center justify-between gap-2">
        <img
          src={squarePlaceholder}
          alt="Profile img"
          className="aspect-square rounded-full max-h-full"
        />
        <h1>Janitz De Paz</h1>
      </div>
      {width < mobileWidth ? (
        <>
          <button
            className={clsx("aspect-square h-2/5 z-30")}
            aria-label="toggle mobile menu"
            onClick={() => toggleMenu()}
          >
            <img
              src={headerMenuButton}
              alt="menu icon"
              className="aspect-square rounded-full h-full"
            />
          </button>
        </>
      ) : (
        <ul className="flex gap-5 justify-center items-center">
          {headerItems.map((item) => (
            <li
              key={item.id}
              className="text-(--text-muted) hover:text-(--text-main)"
            >
              <a href={item.link} onClick={(e) => {
                e.preventDefault();
                scrollToId(item.link)
              }}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
