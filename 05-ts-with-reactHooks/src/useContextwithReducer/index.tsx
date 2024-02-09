import Counter from "./Counter";
import { CounterProvider } from "./context/CounterContext";

const ContextWithReducer = () => {
  return (
    <CounterProvider count={0} text="">
      <Counter>{(num: number) => <>Count is {num}</>}</Counter>
    </CounterProvider>
  );
};
export default ContextWithReducer;
