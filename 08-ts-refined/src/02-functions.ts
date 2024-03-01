// Let's create function which takes function

const greet = (fn: (str: string) => void): void => {
  fn("Hello world!");
};

function printMsg(str: string): void {
  console.log(str);
}

// we can create call signatures
type DescribableFunction = {
  (str: string): void;
  description: string;
};

// Construct Signatures
//for function which act as a instance

//Q-Create the construct signature for constructor

//Let's think that function takes the constructor function which take argument as a string

type ConstructFunction = {
  new (s: string): void;
};

function fn(ctor: ConstructFunction) {
  return new ctor("Tim");
}

interface CallOrConstruct {
  (n: number): number;
  new (s: string): void;
  name: string;
}

function fn2(ctor: CallOrConstruct) {
  return new ctor("Tim");
}

//Q-Create the generic for the map function ;

function map<input, output>(
  arr: input[],
  callback: (item: input) => output
): output[] {
  return arr.map(callback);
}

// So above me make the function which takes input of any type of array and perform function and return the array of output type

const newArr = map([1, 2, 3], (a) => a.toString());

//Q create the generic function which takes two argument which should constraint the {length : number} property in them and check who has length bigger and return that argument

function minimumLength<Type extends { length: number }>(
  arr1: Type,
  arr2: Type
): Type {
  if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

//Q-Create function with generic in which we later can explicit tells the function that what type of argument we taking in

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// let's experiment this function

console.log(combine([1, 2, 3], [23, 1]));

// but what when we have two different types of array
// we can explicitly tell the function that we have two different types of array by providing union type in it

console.log(combine<number | string>([1, 2, 3], ["tim", "jake"]));

//Q-create generic function for filter function of array

function filterArr<Type>(
  arr: Type[],
  filterFunc: (item: Type) => boolean
): Type[] {
  return arr.filter(filterFunc);
}

//Q-make the function which takes  overload first number second three number and return the data

function makeDate(timeStamps: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// In order to adhere to both condition we have to make the two parameters in the function optional
function makeDate(mOrTimeStamp: number, d?: number, y?: number): Date {
  if (d != undefined && y != undefined) {
    return new Date(mOrTimeStamp, d, y);
  } else {
    return new Date(mOrTimeStamp);
  }
}

// How to use this in function
// Q-Make the function which takes a object as a parameter

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

type User = typeof user;

const adminArr = (
  dbGetter: () => User[],
  callback: (item: User) => boolean
): User[] => {
  return dbGetter().filter(callback);
};

function callback(item: User): boolean {
  return item.admin;
}
const admins = adminArr(getDb, callback);

// different return types in function

// we can return void if we don't want to return anything or any exclusive return in function

function giveMessage(): void {
  console.log("Hello people");
}

// the void and undefined are different

//Never in function
function laceIt(str: string): never {
  throw new Error("Do it yourself!");
}

// Also never is return when there is nothing left in union

function checkVal(x: number | string) {
  if (typeof x === "string") {
    return x;
  } else if (typeof x == "number") {
    return x;
  } else {
    return x; //Here type of x is never because all unions are over
  }
}

//Using rest parameters in function

function multiply(factor: number, arr: number[]): number[] {
  return arr.map((item) => item * factor);
}

//Making tuple
const arr = [1, 2, 3] as const;

//Destructuring in function

function getObj({ a, b, c }: { a: number; b: number; c: number }) {}

//Void

type Voider = () => void;
const letsSee: Voider = () => {
  return "j";
};

const anotherOne: Voider = () => {
  return true;
};

const getter = anotherOne;
