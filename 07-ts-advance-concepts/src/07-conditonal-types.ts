// Making types from conditionals

interface Cords {
  x: number;
  y: number;
}

interface Vertices extends Cords {
  sides: number;
}

type Polygon = Vertices extends Cords ? "polygon" : "line";

// Let's say we create overload function using two interface

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: number | string): IdLabel | NameLabel;s
// function createLabel(nameOrId: number | string): IdLabel | NameLabel {
//   throw "unimplemented";
// }

type NameOrId<T extends string | number> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(nameOrId: T): NameOrId<T> {
  throw "unimplemented";
}

// type MessageOf<T > = T["message"];
// Make a type which accepts generic type and from which we can accept it's index type

type MessageOf<T extends { message: unknown }> = T["message"];
interface Email {
  message: string;
}

type EmailMsgType = MessageOf<Email>;

// Let's assume that if there is no {message} index in the T so we conditionally have to do the things

type MessageOf2<T> = T extends { message: unknown } ? T["message"] : never;

// Assume that the type is coming is either any[] or any primitive so we have to make the conditional type to get type that any[] contains based on its index

type Flatten<T> = T extends any[] ? T[number] : T;

type str = Flatten<string[]>;

// Rather than digging through the index acces of that generic array type we can infer its index type

type Flatten2<T> = T extends Array<infer item> ? item : T;

type num = Flatten<number[]>;
