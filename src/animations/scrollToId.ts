import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export const scrollToId = (url: string) => {
  gsap.to(window, {
    duration: 0.8,
    scrollTo: { y: url },
    autoKill: true,
    ease: "power2.inOut",
  });
};
