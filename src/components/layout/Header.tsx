import { headerItems } from "../../constants/headerItems";
import squarePlaceholder from "../../assets/placeholders/squarePlaceholder.png";
import headerMenuButton from "../../assets/icons/headerMenu.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [openMenu, toggleMenu] = useState<boolean>(false);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, []);
  console.log(width)
  return (
    <header className="fixed inset-0 h-(--header-height) bg-(--header-bg) flex justify-around items-center border-b border-(--primary-border) z-50">
      <div className="h-4/5 flex items-center justify-between gap-2">
        <img
          src={squarePlaceholder}
          alt="Profile img"
          className="aspect-square rounded-full max-h-full"
        />
        <h1>Janitz De Paz</h1>
      </div>
      {width < 800 ? (
        <>
          <button
            className={clsx("aspect-square h-2/5 z-30")}
            aria-label="toggle mobile menu"
            onClick={() => toggleMenu((prev) => !prev)}
          >
            <img
              src={headerMenuButton}
              alt="menu icon"
              className="aspect-square rounded-full h-full"
            />
          </button>
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
        </>
      ) : (
        <ul className="flex gap-5 justify-center items-center">
          {headerItems.map((item) => (
            <li
              key={item.id}
              className="text-(--text-muted) hover:text-(--text-main)"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
