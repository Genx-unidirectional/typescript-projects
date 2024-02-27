// In narrowing we narrow down the union types so that whatever we are going to return is clear not a vague let's take a example

// In below code our purpose is if working we accept what work in a string format and if not working we accept it in a boolean format which is false and according to that we return the string but problem arises when we return work thinking that it is a string but it can be boolean so we need to narrow down it and check the type then return it
function working(work: string | boolean): string {
  if (typeof work === "string") {
    return work;
  }
  return "Not working";
}

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
type bird = { fly: () => void };
type fish = { swim: () => void };

function action(animal: fish | bird): void {
  if ("swim" in animal) {
    return animal.swim();
  } else {
    return animal.fly();
  }
}

type human = { swim: () => void; fly: () => void };

function action2(animal: fish | bird | human): void {
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
