import { useRef } from "react";
import gsap from "gsap";

export const TechCards = ({ name, img, color }: TechCardsType) => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!spotlightRef.current || !cardRef.current || !borderRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    borderRef.current.style.setProperty("--x", `${x}px`);
    borderRef.current.style.setProperty("--y", `${y}px`);

    const size = 200;

    gsap.to(spotlightRef.current, {
      left: x - size / 2,
      top: y - size / 2,
      duration: 0.15,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseEnter = () => {
    gsap.to([spotlightRef.current, borderRef.current], {
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to([spotlightRef.current, borderRef.current], {
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="overflow-hidden relative flex flex-col justify-center items-center gap-5 w-40 xl:w-50 h-40 xl:h-50 p-8 rounded-xl bg-[#080808] border border-[#1a1a1a]"
    >
      <div
        ref={borderRef}
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 border border-transparent"
        style={{
          backgroundImage: `
          linear-gradient(#080808, #080808),
          radial-gradient(100px circle at var(--x, 50%) var(--y, 50%), ${color}cc, transparent 50%)
        `,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      />
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute w-25 xl:w-50 h-25 xl:h-50 rounded-full opacity-0"
        style={{
          background: `radial-gradient(circle, ${color}55 0%, ${color}22 50%, transparent 70%)`,
        }}
      />

      <img
        src={img}
        alt={`${name} icon`}
        className="w-10 lg:w-20 aspect-square relative z-10"
      />
      <span className="text-center relative z-10 text-white/70 text-xl lg:text-2xl">
        {name}
      </span>
    </article>
  );
};
