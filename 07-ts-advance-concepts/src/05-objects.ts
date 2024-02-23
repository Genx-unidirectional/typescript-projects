// we can make type aliases for object having optional properties

type Person1 = {
  name: string;
  age: number;
  verified?: boolean;
};

const p1: Person1 = {
  name: "ganesh",
  age: 21,
};

// also we can make some properties readonly

type Employee = {
  name: string;
  readonly time: string;
};

interface Employee2 {
  name: string;
  time: string;
}

const worker1: Employee = {
  name: "tim",
  time: "7 am",
};

// worker1.time = "3 pm" cannot work

const worker2: Employee2 = {
  name: "jade",
  time: "10 pm",
};

// below we assign the readonly having prop obj to not readonly we cannot change time of worker3 by using worker3.time but we can change the worker2.time and it automatically changes the worker3 time prop  because both pointing ar same object address location

const worker3: Employee = worker2;

console.log(worker3.time);
worker2.time = "4 am";
console.log(worker3.time);

// using index signatures with object type aliases

type StringArray = {
  [index: number]: string;
};

const stringArr: StringArray = ["tim", "jade"];

// Excess property checks

type SquareConfig = {
  color?: string;
  width?: number;
};

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width ** 2 : 20,
  };
}

console.log(createSquare({ color: "pink", width: 12 }));

console.log(createSquare({ width: 12, opacity: 0.5 } as SquareConfig));

// In above we add extra prop when we want to add one extra prop we can make that in interface

interface SquareConfig2 {
  color: string;
  width?: number;
  [propsName: string]: any;
}

// Extending types in interface

interface Circle1 {
  radius: number;
}

interface Colorful {
  color: string;
}

interface ColorfulCircle extends Circle1, Colorful {}

const circle: ColorfulCircle = {
  radius: 23,
  color: "pink",
};

// Intersection types

type ColorfulCircle2 = Circle1 & ColorfulCircle;

function draw(circle: ColorfulCircle2) {
  console.log(circle.radius);
  console.log(circle.color);
}

draw({ color: "yellow", radius: 12 });

// Generics while making objects

interface Box<T> {
  contents: T;
}

const stringBox: Box<string> = { contents: "Hello" };
const numberBox: Box<number> = { contents: 12 };

interface Apple {
  color: string;
}

type AppleBox = Box<Apple>;

const boxOfApple: AppleBox = { contents: { color: "red" } };

// we can make readonly array types in function argument

function opsArr(arr: ReadonlyArray<string>) {
  const mappedArr = arr.map((item) => {
    item.repeat(3);
  });

  //   arr.push("tim") won't work because we have set the array as readonly
}

// we can create tuple which is another sort of array the tuple are usefull when it comes to heavily convention based API
function apiData(Data: [string, number]) {}

// we can make elements in tuple optional

type Either2Dor3D = [number, number, number?];

const checkDimension = (coord: Either2Dor3D): void => {
  const [x, y, z] = coord;

  console.log(`The given coordinates make ${coord.length}D shape`);
};

checkDimension([12, 1]);

// We can spread operator with tuple
function readButtonInput(...arr: [string, number, ...boolean[]]) {
  const [name, version, ...input] = arr;
}

// we can make the tuples readonly
function points(arr: readonly [number, number]) {
  // arr[0] = 23 won't work because it's readonly
}

// we can make the the elements inside array contants by using as const
const arr5 = [1, 2, 4, 5] as const;
// arr5[0] = 1; won't work because it's readonly
