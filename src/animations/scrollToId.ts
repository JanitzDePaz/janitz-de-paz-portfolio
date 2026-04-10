import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export const scrollToId = (url: string) => {

  const offset = window.innerHeight * 0.07;

  gsap.to(window, {
    duration: 0.8,
    scrollTo: { y: url, autoKill: true, offsetY: offset },
   
    ease: "power2.inOut",
  });
};
