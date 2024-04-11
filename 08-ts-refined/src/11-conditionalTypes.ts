interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

//Creating type based on what's coming

type TLabel = {
  id: number;
};

type TName = {
  name: string;
};

type NameOrId<T extends number | string> = T extends number ? TLabel : TName;

function createLabel<T extends string | number>(nameOrId: T): NameOrId<T> {
  throw "unimplemented";
}

let tedId = createLabel(12);

let tedName = createLabel("js");

type MessageType<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailContentType = MessageType<Email>;

//But let's say we we some clauses don't have the message property so we conditionally check that T extends it or not if not then we assign never

type Message<T> = T extends { message: unknown } ? T["message"] : never;

interface Dodger {
  (): void;
}

type DodgerContentType = Message<Dodger>;

//Let's find anything which  is coming is array if yes then what type that array is and if not then assign the type that they have

type Flatten<T> = T extends any[] ? T[number] : T;

type ArrType = Flatten<string[]>;

type ArgType = Flatten<string>;

//Let's say i don't want to dig into what index type that array have if that type extends it  then i simply infer it by introducing the generics there

type Message3<T> = T extends Array<infer item> ? item : T;

type TestAns = Message3<string[]>;

// Make the type which takes the Type and checks it extends as a function and infer it's return type return it

type GetReturnType<T> = T extends (...arg: never[]) => infer Return
  ? Return
  : never;

type Func1 = GetReturnType<() => number>;

//Distributive conditional types

type DistributedType<T> = T extends any ? T[] : never;
//When conditional types act on the generic and if that generic it union then it maps over each union and return it

type CheckOne = DistributedType<string | number>;

// so to cancel out distribution we use box notation

type NonDistributedType<T> = [T] extends [any] ? T[] : never;
