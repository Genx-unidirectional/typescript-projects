import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({
  title = "This is default title",
  children,
}: SectionProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
export default Section;
