import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MouseEvent, KeyboardEvent } from "react";
interface User {
  id: string;
  username: string;
}

type FibFunc = (num: number) => number;

const fib: FibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
const myNum = 37;
const Hooks = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const refContainer = useRef<HTMLInputElement>(null);
  console.log(refContainer?.current);
  console.log(refContainer?.current?.value);

  //   Using useMemo hook ----->>>>>
  const value = useMemo<number>(() => fib(myNum), [myNum]);
  console.log(value);

  //   Using useCallback ----->>>>>
  const addTwo = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
      setCount((prev) => prev + 1);
    },
    []
  );

  //   Using useEffect ----->>>>>

  useEffect(() => {
    console.log("Mounted");
    console.log("users", users);
    return () => {
      console.log("Unmounting");
    };
  }, [users]);

  return (
    <div>
      <h1>{count}</h1>
      <input
        type="text"
        name="name"
        id="name"
        ref={refContainer}
        placeholder="type something"
      />
      <button onClick={addTwo}>Click</button>
    </div>
  );
};
export default Hooks;
