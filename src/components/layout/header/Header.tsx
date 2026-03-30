import { useEffect } from "react";
import { MobileMenu } from "./MobileMenu";
import { Navbar } from "./Navbar";
import { headerMenu } from "../../../stores/headerStore";
export const Header = () => {
  const setWidth = headerMenu((e) => e.setWidth);
  useEffect(() => {
    const changeWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    changeWidth();
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [setWidth]);

  return (
    <>
      <Navbar />
      <MobileMenu />
    </>
  );
};
