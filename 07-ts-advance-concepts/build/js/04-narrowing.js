"use strict";
// Below narrow down he function based on numArr value is undefined or not
function factor(numArr, num) {
    if (!numArr) {
        return `The value array is empty`;
    }
    else {
        return numArr.map((num) => num * num);
    }
}
// Narrowing down the function for printing out the string which possibly null
function printAll(str) {
    if (str !== null) {
        if (typeof str === "object") {
            for (let string of str) {
                console.log(string);
            }
        }
    }
    else if (typeof str === "string") {
        console.log(str);
    }
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
function move(animal) {
    if ("swim" in animal && animal.swim !== undefined) {
        return animal.swim();
    }
    else if ("fly" in animal && animal.fly !== undefined) {
        return animal.fly();
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function process(input) {
    if (typeof input === "string") {
        // input is inferred as string within this block
        return input.toUpperCase();
    }
    else {
        // input is inferred as number within this block
        return input.toFixed(2);
    }
}
function areaOfShape(shape) {
    if (shape.kind === "square") {
        return shape.sideLength * 4;
    }
    else {
        return Math.PI * shape.radius ** 2;
    }
}
