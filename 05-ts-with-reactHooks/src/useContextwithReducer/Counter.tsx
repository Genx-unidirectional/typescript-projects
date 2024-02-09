import { ReactNode } from "react";
import { useCounter, useText } from "./context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounter();
  const { text, handleInputChange } = useText();
  return (
    <div>
      <h1>{children(count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" id="text" name="text" onChange={handleInputChange} />
      <h2>{text}</h2>
    </div>
  );
};
export default Counter;
