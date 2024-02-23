// Below narrow down he function based on numArr value is undefined or not
function factor(numArr: number[] | undefined, num: number): string | number[] {
  if (!numArr) {
    return `The value array is empty`;
  } else {
    return numArr.map((num) => num * num);
  }
}

// Narrowing down the function for printing out the string which possibly null

function printAll(str: string[] | string | null): void {
  if (str !== null) {
    if (typeof str === "object") {
      for (let string of str) {
        console.log(string);
      }
    }
  } else if (typeof str === "string") {
    console.log(str);
  }
}

interface Container {
  value: number | undefined | null;
}

// function multiplyValue(container: Container, factor: number): number {
//   if (container.value !== null) {
//     return container.value * factor;
//   } else {
//     return -1;
//   }
// }

// console.log(multiplyValue({ value: null }, 2));

let variable;

if (variable != undefined) {
  console.log(true);
}

if (variable !== undefined) {
  console.log(true);
}

// Narrow down using properties inside object
type fish = { swim: () => void };
type bird = { fly: () => void };
type human = { swim?: () => void; fly?: () => void };

function move(animal: fish | bird | human) {
  if ("swim" in animal && animal.swim !== undefined) {
    return animal.swim();
  } else if ("fly" in animal && animal.fly !== undefined) {
    return animal.fly();
  }
}

function isFish(pet: fish | bird): pet is fish {
  return (pet as fish).swim !== undefined;
}

function process(input: string | number): number | string {
  if (typeof input === "string") {
    // input is inferred as string within this block
    return input.toUpperCase();
  } else {
    // input is inferred as number within this block
    return input.toFixed(2);
  }
}

// Discriminating the types

type Circle = {
  kind: "circle";
  radius: number;
};

type Square2 = {
  kind: "square";
  sideLength: number;
};

type Shape2 = Circle | Square2;

function areaOfShape(shape: Shape2): number {
  if (shape.kind === "square") {
    return shape.sideLength * 4;
  } else {
    return Math.PI * shape.radius ** 2;
  }
}
