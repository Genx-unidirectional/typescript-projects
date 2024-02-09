import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ title = "Section title", children }: SectionProps) => {
  return (
    <>
      <h2>{title}</h2>
      <h4>{children}</h4>
    </>
  );
};
export default Section;
