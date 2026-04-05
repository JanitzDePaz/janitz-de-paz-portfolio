import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollAnimation = ({
  className,
  direction,
  distance = 50,
  delay = 0,
  start,
  duration = 0.8,
  stagger = 0,
}: ScrollAnimTypes) => {
  const moveX =
    direction === "right" ? distance : direction === "left" ? -distance : 0;
  const moveY =
    direction === "down" ? distance : direction === "up" ? -distance : 0;
  gsap.from(className, {
    opacity: 0,
    x: moveX,
    y: moveY,
    delay,
    ease: "power2.out",
    duration,
    stagger,
    scrollTrigger: {
      trigger: className,
      start: start,
      toggleActions: "play none none reverse",
    },
  });
};
