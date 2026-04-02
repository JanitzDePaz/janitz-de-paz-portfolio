export const PrimaryButton = ({ href, children, className }: PrimaryButtonType) => {
  const buttonStyle = `font-(--font-body) font-semibold text-lg bg-white text-black px-16 py-2 rounded-full transition-transform duration-200 ease ${className}`;

  if (href == null || href == "") {
    return (
      <button className={buttonStyle}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={buttonStyle}>{children}</a>
  )
};
