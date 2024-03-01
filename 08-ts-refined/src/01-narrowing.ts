// In narrowing we narrow down the union types so that whatever we are going to return is clear not a vague let's take a example

// In below code our purpose is if working we accept what work in a string format and if not working we accept it in a boolean format which is false and according to that we return the string but problem arises when we return work thinking that it is a string but it can be boolean so we need to narrow down it and check the type then return it
function working(work: string | boolean): string {
  if (typeof work === "string") {
    return work;
  }
  return "Not working";
}
console.log(null === undefined);

// Q-Narrow down based on what is typeof padding

function padLeft(padding: string | number, input: string): string {
  if (typeof padding === "string") {
    return padding + input;
  }
  return "".repeat(padding) + input;
}

// Above we check go for one condition and check padding is string or not if not typescript automatically infer that typeof padding is number

// Narrowing based on truthiness
//We know that in js on if statement the falsy values are coerced into boolean then they decide code inside the if statement is going to execute or not

// Here the example
Boolean("hello"); // return true
!!"hello"; //return true

// using boolean value with if to execute the code inside the if statement

//Q- Make the function which takes str of type string or array or null and print them

function printAll(str: string | string[] | null): void {
  //we don't have to put overall body of the function in a null check because it's worth nothing
  if (str && typeof str === "object") {
    for (let i of str) {
      console.log(i);
    }
  } else if (str === "string") {
    console.log(str);
  }
}

// We can negate the variable in checking

function mapIt(
  value: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!value) {
    return value;
  }
  return value.map((item) => item * factor);
}

// undefined == null returns true due to type coercion, but undefined === null returns false because they are of different types.

// using in operator in narrowing
type Bird = { fly: () => void };
type Fish = { swim: () => void };

function action(animal: Fish | Bird): void {
  if ("swim" in animal) {
    return animal.swim();
  } else {
    return animal.fly();
  }
}

type Human = { swim: () => void; fly: () => void };

function action2(animal: Fish | Bird | Human): void {
  if ("swim" in animal) {
    animal;
  } else {
    animal;
  }
}

// Using instanceOf to narrow down
function dateChecker(date: Date | string): string {
  if (date instanceof Date) {
    return date.getTime().toString();
  } else {
    return date;
  }
}

// If type is not provided to variable typescript infer it based on right side value
//see the type assign to x and x2 based on const and let which is nothing but using i.e what is going to be used next
let x = Math.random() < 0.5 ? 10 : "hello world";
const x2 = Math.random() < 0.5 ? 10 : "hello world";

// Control Flow Analysis

function padRight(padding: number | string, str: string): string {
  if (typeof padding === "number") {
    return str + " ".repeat(padding);
  } else {
    return str + padding;
  }
}

// In above code we add type guard and check typeof the padding and then use the function on it and add it to the string str and typescript understand the str + padding this line is unreachable when the padding is number as result it remove the number type from padding to the rest of the function
// That's said typescript does analysis based on reachability of the variable based on it's type is called control flow analysis.

function example() {
  let x: string | number | boolean;
  x = false;

  if (Math.random() > 0.5) {
    x = "hello";
  } else {
    x = 12;
  }
  return x;
}

// In above ,When a variable is analyzed, control flow can split off and re-merge over and over again, and that variable can be observed to have a different type at each point.

// Type Predicates

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// In above code we predicate the pet as a Fish by failing the typescript using as and check that pet contain swim method

// We can use above predicate to narrow down the type in if checks

const pet = { swim: () => {} };

function whatItIs(pet: Fish | Bird): void {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// Q - Make the Array of pets and filter out those pet who are fish

const petArray: (Fish | Bird)[] = [
  { fly: () => {} },
  { fly: () => {} },
  { swim: () => {} },
  { swim: () => {} },
];

const filteredFishArr = petArray.filter(isFish);

//Assertion function is function which takes any type and return asserted type of condition is true

interface Car {
  brand: string;
  engine: string;
}

function isCar(obj: any): obj is Car {
  return obj && typeof obj.brand === "string" && typeof obj.engine === "string";
}

// Using the Discriminated unions

// We use discriminated  union when we identified the combination type has one similar property but it's value is different

// Q- Make the Circle and Square and assign their union to single type which is Shape and use discriminated unions narrow the type

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius ** 2;
    }
    case "square": {
      return shape.sideLength * 4;
    }
    default: {
      throw new Error("Wrong shape");
    }
  }
}

//Exhaustive check
function area2(shape: Shape) {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius ** 2;
    }
    case "square": {
      return shape.sideLength * 4;
    }
    default: {
      const _exhaustiveType: never = shape;
      return _exhaustiveType;
    }
  }
}
