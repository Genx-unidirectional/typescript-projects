// Promises<T>,Map<k,v>,Set<T> These also uses generic

//,  Generics are the basically echo of what type we are passing and similar type we can return

const func = <T>(arg: T): T => {
  return arg;
};

function test<T>(arg: T) {
  // arg.length -> won't work
}
// Solution-->
function arrTest<T>(arr: T[]): T[] {
  console.log(arr.length);
  return arr;
}

arrTest([1, 2, 3]);
arrTest<number | string>([1, "tim"]); //we can set type explicitly also

function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: <T>(arg: T) => T = identity;
const myIdentity2: { <T>(arg: T): T } = identity;

// we can create generic interface
interface CreateIdentity<T> {
  (arg: T): T;
}

const myIdentity3: CreateIdentity<number> = identity;

console.log(myIdentity3 === identity); //This is because all pointing same address

// Using generics with classes

// class GenericNumber<NumType> {
//     zeroValue: NumType;
//     add: (x: NumType, y: NumType) => NumType;
//   }

// We can constrain the generics example below

interface LengthWise {
  length: number;
}
function testArr<T extends LengthWise>(arg: T): T {
  console.log(arg.length); // Now we can access the length property because we explicitly extend the generic
  return arg;
}

// Using generics to resolve the any type of key in object

function printProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(printProp({ name: "ganesh", age: 21 }, "age"));

const testObj = {
  name: "ganesh",
  age: 21,
};

interface People {
  name: string;
  age: number;
}
type POP = keyof People; //i.e union of People type literals
type TOB = keyof typeof testObj;

type Func = (a: number) => boolean;

type a = ReturnType<Func>;

function func1(a: number): boolean {
  if (a) {
    return true;
  } else {
    return false;
  }
}

// type b = ReturnType<func1>; won't work it says func1 refers to value but used as type here

type b = ReturnType<typeof func1>;

// using indexAccess types
type Person2 = { name: string; age: number; alive: boolean };

// type P1 = Person2[string];
// ypeScript doesn't allow you to access its properties using string indexes because it doesn't have an index signature that matches the string type. An index signature is a way to define the types for accessing properties dynamically, but in the case of Person2, there's no such signature because it's not an object or an array.
// type P2 = Person2["name" | "age"];

type P3 = Person2["name" | "age"];

type Alive = "alive";

type P4 = Person2[Alive];

const array1 = ["ganesh", 12, true];

type A1 = (typeof array1)[number];

const array2 = [
  { name: "ganesh", age: 21, alive: true },
  { name: "leila", age: 29, alive: true },
];

type Person4 = (typeof array2)[number];

type Age = (typeof array2)[number]["age"];

// Below code won't because we need type here not value
// let age = "age"
// type Age2 = (typeof array2)[number][age];
