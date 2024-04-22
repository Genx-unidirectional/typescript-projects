import { useEffect, useRef } from "react";

function RefWithType() {
  const ref = useRef<number | null>(null);
  useEffect(() => {
    ref.current = setInterval(() => {
      console.log("hello");
    }, 2000);
    return () => clearInterval(ref.current!);
  }, []);
}

export default RefWithType;
