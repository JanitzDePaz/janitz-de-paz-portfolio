export const PrimaryButton = ({
  href,
  children,
  className = "",
}: PrimaryButtonType) => {
  const buttonStyle = `font-(--font-body) font-semibold text-lg bg-white text-black px-16 py-2 rounded-full transition-all duration-200 ease hover:bg-[#cacaca] hover:scale-[1.03] active:scale-95 ${className}`;

  if (href == null || href == "") {
    return <button className={buttonStyle}>{children}</button>;
  }

  return (
    <a href={href} className={buttonStyle}>
      {children}
    </a>
  );
};
