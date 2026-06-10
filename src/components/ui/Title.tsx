export const Title = ({ children, className = "" }: TitlesTypes) => (
  <h1 className={`text-3xl sm:text-5xl xl:text-7xl title ${className}`}>
    {children}
  </h1>
);
