export const Subtitle = ({ children, className = "" }: TitlesTypes) => (
  <h2
    className={`text-xl sm:text-3xl xl:text-4xl text-(--accent) subtitle ${className}`}
  >
    {children}
  </h2>
);
