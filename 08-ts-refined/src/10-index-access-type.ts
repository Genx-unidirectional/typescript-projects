type Men = { age: number; name: string; verified: boolean };

type T1 = Men["age"];
type T3 = Men["age" | "verified"];
type T4 = Men[keyof Men];

// type AliveOrName = "alive" | "name";
// type T5 = Men[AliveOrName];

const userArr2 = [
  { name: "tim", age: 12 },
  { name: "jim", age: 22 },
  { name: "lex", age: 32 },
];

type T5 = (typeof userArr2)[number]["age"];

// const key = "age"; won't work
type key = "age";
type T6 = Men[key];
