const a1 = "jumper";
type A1 = typeof a1;

function Checker(arg: number): boolean {
  return arg > 12;
}

type TReturn = ReturnType<typeof Checker>;

//Limitation we can only take type from identifier not from their executions

// type TReturn2 = ReturnType<typeof Checker(12)>; Won't work
