export const TechCardStatic = ({ name, img, color }: TechCardsType) => {
  return (
    <article
      className="overflow-hidden relative flex flex-col justify-center items-center gap-2 lg:gap-5 w-20 lg:40 xl:w-50 aspect-square p-2 lg:p-8 rounded-xl bg-[#080808] border border-[#1a1a1a]"
    >
      <div
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
      <span className="text-center relative z-10 text-white/70 text-[0.5rem] lg:text-xl xl:text-2xl pointer-events-none">
        {name}
      </span>
    </article>
  );
};
