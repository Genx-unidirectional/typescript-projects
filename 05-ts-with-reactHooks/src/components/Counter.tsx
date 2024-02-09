import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <div>
      <h1>Count is {value}</h1>
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
    </div>
  );
};
export default Counter;
