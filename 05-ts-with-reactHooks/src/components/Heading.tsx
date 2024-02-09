import { ReactElement } from "react";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1>{title}</h1>;
};
export default Heading;
