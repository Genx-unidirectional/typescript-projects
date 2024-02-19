function greet(fn: (a: string) => void) {
  fn("hello world!");
}

function printToConsole(a: string): void {
  console.log(a);
}

// greet(printToConsole);

// We can make type alias to to name function type

type GreetFunction = (a: string) => void;

function greet2(fn: GreetFunction) {
  fn("Hello champ");
}

type DescribableFunction = {
  description: string;
  (a: number): boolean;
};

const fn1 = (a: number): boolean => {
  return a > 3;
};

fn1.description = "greater than 3 checker";

function doSomething(fn: DescribableFunction) {
  console.log(`${fn.description} returns  ${fn(6)}`);
}

// doSomething(fn1);
// console.log(typeof fn1);

// Let's create the function with new signature

type ObjectTypeFunc = {
  new (a: string): void;
};

function test(fn: ObjectTypeFunc): void {
  new fn("Hello world!");
}

interface CallOrConstruct {
  (a?: string): string;
  new (b: string): Date;
}

// Using generics in function argument

// below function takes the argument as array but return type is any
function firstElement(arr: any[]) {
  return arr[0];
}

// We want return the type of array instead

function firstElement2<T>(arr: T[]): T | undefined {
  return arr[0];
}

// So when we pass the arr having specific type we infer this with generic so instead returning any we return the type that array holds
const s: number | undefined = firstElement2([1, 2, 3]);
const p = firstElement2(["ganesh", "gex", "genx"]);
const e = firstElement([1, 2, 3]); //e has any type because we didn't specify the type that array holds

//We can use multiple generics

// Let's create the function which takes array of string and convert each element in array into number and return the number array
// We will make this using generics

function map<input, output>(
  arr: input[],
  func: (n: input) => output
): output[] {
  return arr.map(func);
}

// The above code we simply made generic return type for map function

const arr2 = map(["1", "2", "3"], (n) => parseInt(n)); //We can see that typescript automatically infer the arr2 has number[] type

// We can set constraints to the generics

// Let's say we taking two array as a argument and return whose length is greater than who

function longest<type extends { length: number }>(arr1: type, arr2: type) {
  if (arr1.length >= arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

// console.log(longest([1, 2, 3, 4], [3, 4, 2, 2, 3]));
// console.log(longest("tim", "jim"));
let tObj = { name: "ganesh", age: 21 };

// console.log(longest(1, 2))

//Let's see common error while constraint the generics
//Let's make function which check object length

// function maximum<T extends { length: number }>(obj: T, minimum: number): T {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum }; //Won't work
//   }
// }

// basically it says that the function should return object which we pass as type T not should return the another object with constraint we assign there

// Let's make function to combine two array

function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

console.log(combine([1, 2, 4], [5, 6, 7]));
// console.log(combine([1, 2, 4], ["23"])); //We can't specify more than one type of value here

// Instead we do this ,

console.log(combine<number | string>([1, 2, 3], ["23"]));

// In above example we explicitly specify the type to the generic rather than let it implicitly decide

// Let's make generic for array filter method

function filter<T>(arr: T[], func: (a: T) => boolean): T[] {
  return arr.filter(func);
}

// Bad code>>
function test2(arr: number[], func: (a: number, i?: number) => void): void {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i);
  }
}

// test2([1, 2, 3], (a, i) => {
//   console.log(i.toFixed(2));//See it won't work so don't put unnecessary optional parameters in callbacks
// });

//We can make function which can take overloads by defining it's body only

function makeDate(timeStamps: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimeStamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(mOrTimeStamp, d, y);
  } else {
    return new Date(mOrTimeStamp);
  }
}

// Calling this in function

const user = {
  name: "Ganesh",
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// let's say we have having array of user object and we want to filter it out based on they are admin or not

function getDb(): (typeof user)[] {
  return [
    {
      name: "Ganesh",
      admin: false,
      becomeAdmin: function () {
        this.admin = true;
      },
    },
    {
      name: "gex",
      admin: true,
      becomeAdmin: function () {
        this.admin = true;
      },
    },
    {
      name: "Ganesh",
      admin: false,
      becomeAdmin: function () {
        this.admin = true;
      },
    },
    {
      name: "rex",
      admin: true,
      becomeAdmin: function () {
        this.admin = true;
      },
    },
  ];
}

interface DbFilter<T> {
  (user: T): boolean;
}
// if we want to use this in function using type signatures we already infer the this to user type
const filterDb = <T>(db: T[], filterFunc: DbFilter<T>): T[] => {
  return db.filter(filterFunc);
};

const users = filterDb(getDb(), function (user) {
  return user.admin === true;
});
console.log(users);
// using rest parameter

function makeNewArr(n: number, ...arr: number[]): number[] {
  return arr.map((i) => i * n);
}

// console.log(makeNewArr(3, 1, 2, 3, 4, 4));
// This behavior exists so that the following code is valid even though Array.prototype.push returns a number and the Array.prototype.forEach method expects a function with a return type of void.

type VoidFunc = () => void;

const textFn1: VoidFunc = () => {
  return true;
};
