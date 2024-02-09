import { ReactNode } from "react";

type Counter = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};
const Counter = ({ setValue, children }: Counter) => {
  return (
    <>
      <h2>{children}</h2>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -
      </button>
    </>
  );
};
export default Counter;
