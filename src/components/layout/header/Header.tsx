import { useEffect } from "react";
import { MobileMenu } from "./MobileMenu";
import { Navbar } from "./Navbar";
import { headerMenu } from "../../../stores/headerStore";
import { useShallow } from "zustand/shallow";
export const Header = () => {
  const { setWidth, setMenu, width } = headerMenu(
    useShallow((s) => ({
      setWidth: s.setWidth,
      setMenu: s.setMenu,
      width: s.width,
    })),
  );

  const mobileWidth = headerMenu.getState().mobileWidth;
  useEffect(() => {
    const changeWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setMenu(false);
    };
    changeWidth();
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [setWidth, setMenu]);

  return (
    <header className="fixed inset-0 h-(--header-height) z-50">
      <Navbar />
      {width <= mobileWidth && <MobileMenu />}
    </header>
  );
};
