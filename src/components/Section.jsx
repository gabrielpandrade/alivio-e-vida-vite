const Section = ({ className, id, customPaddings, children }) => {
  return (
    <div
      id={id}
      className={`relative w-dvw overflow-hidden ${
        customPaddings || "py-10 lg:py-16 xl:py-20"
      } ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
