// We can create interface or type signature for object

interface Person {
  name: string;
  age: number;
}

function info(person: Person): string {
  return person.name;
}

// we can make the optional params in the interface so that some properties in object will be optional

//Q-Create the interface which is schema for object having two property optional

interface Shaper {
  shape: string;
  xPos?: number;
  yPos?: number;
}

function hasSpaceCovered(shape: Shaper): boolean {
  if (shape.xPos == null && shape.yPos == null) {
    return false;
  } else {
    return true;
  }
}

// instead of this we can use javascript to provide default value

function hasSpaceRefined({ shape, xPos = 0, yPos = 0 }: Shaper) {
  return xPos * yPos;
}

// we can make property in object readonly

interface Student {
  name: string;
  class: string;
  verified?: boolean;
}

const stud1: Student = {
  name: "Ganehs",
  class: "undergrad",
};

type Home = {
  readonly resident: { name: string; area: string };
};

const home1: Home = {
  resident: { name: "tim", area: "north" },
};

// home1.resident = {} won't work
home1.resident.name = "jake";

// Also we can make one object normal and assign it to another readonly but when we make changes in that normal object it reflects in readonly object this is because they both pointing on same location

type Person1 = {
  name: string;
  age: number;
};
type Person2 = {
  readonly name: string;
  readonly age: number;
};

const writableP1: Person1 = { name: "jake", age: 14 };

const readonlyP2: Person2 = writableP1;

// readonlyP2.age= 12 won't work
writableP1.age = 19;
console.log(readonlyP2.age); //Here change in writable reflect in readonly

// Create the interface which has type of property as number and value is of string

interface StringArray {
  [index: number]: string;
}

const testStrArr: StringArray = ["jake", "jade"];

// We can make union also here
interface MixArray {
  [index: number]: string | number;
}

// We can make readonly mix array also
interface ReadonlyMixArray {
  readonly [index: number]: string | number;
}

interface ShapeInfo {
  color?: string;
  width?: number;
}

//EXcessive type checking
function area(shape: ShapeInfo): { color: string; area: number } {
  return {
    color: shape.color ? shape.color : "red",
    area: shape.width ? shape.width ** 2 : 0,
  };
}

// we can do the following to get any other prop name

interface ShapeInfo2 {
  color?: string;
  width?: number;
  [paramsName: string]: any;
}

//Q-make one interface  and extend it with other

interface BasicAddress {
  name: string;
  street: string;
  city: string;
  country: string;
  postalCode: number;
}

// interface AddressWithUnit {  <------   X
//     name: string;
//     unit: string;
//     street: string;
//     city: string;
//     country: string;
//     postalCode: number;
// }

// Instead of doing this we can extend the AddressWithUnit using BasicAddress

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

//More Example

interface Color {
  color: String;
}

interface Circle2 {
  radius: number;
}

interface ColorFullCircle extends Color, Circle2 {}

const colorCircle: ColorFullCircle = {
  color: "red",
  radius: 10,
};

// Intersection types

type Circle3 = {
  radius: number;
};

type Color3 = {
  color: string;
};

type ColorFullCircle3 = Circle3 & Color3;

// Q-Create the interface Box which is object interface which is of type string, number, boolean
//We are crating this because when function will take this object  of this interface type which has generic is in use
interface Box<T> {
  box: T;
}

const stringBox: Box<string> = {
  box: "tim",
};
const numberBox: Box<number> = {
  box: 10,
};
const boolBox: Box<boolean> = {
  box: false,
};

function setContents<Type>(boxer: Box<Type>, contents: Type) {
  boxer.box = contents;
}

type stringBox2 = {
  contents: string;
};

const boxStr: Box<stringBox2> = {
  box: { contents: "Jake" },
};
