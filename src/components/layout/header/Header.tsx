import { useEffect } from "react";
import { MobileMenu } from "./MobileMenu";
import { Navbar } from "./Navbar";
import { headerMenu } from "../../../stores/headerStore";
export const Header = () => {
  const setWidth = headerMenu((e) => e.setWidth);
  const setMenu = headerMenu((e) => e.setMenu)
  useEffect(() => {
    const changeWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setMenu(false)
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
      <MobileMenu />
    </header>
  );
};
