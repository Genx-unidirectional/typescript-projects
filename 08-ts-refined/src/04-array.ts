function doSomething(arr: Array<string>) {}

// is same as
function doSomething2(arr: string[]) {}

// we can make readonly array

function data(arr: ReadonlyArray<string>) {
  arr.map((v) => v + "tim");
  // arr.push("jake") Won't work
}

function data2(arr: readonly string[]) {}

//Let's make tuple

function tupleFunc(arr: [string, number]) {}

function tupleFunc2(...arr: [string, number, ...boolean[]]) {}

// creating readonly tuple

function tupleFuncReadonly(...arr: readonly [string, number, ...boolean[]]) {
  const [name, age, ...verified] = arr;
}

// Making params optional in tuple

type Either2Dor3D = [number, number, number?];

function setCordinates(arr: Either2Dor3D) {
  const [x, y, z] = arr;
  console.log(`The given shape is ${arr.length}D shape`);
}

let testArr: [number, string, boolean] = [23, "jake", false];
// let testArr = [23, "jake", false] as const;

let testArr2 = [23, "jake", false];

// testArr2 = testArr;
// testArr = testArr2;

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

let point = [2, 3] as const;

// distanceFromOrigin(point); Won't work
