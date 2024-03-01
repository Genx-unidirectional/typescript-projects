"use strict";
function doSomething(arr) { }
// is same as
function doSomething2(arr) { }
// we can make readonly array
function data(arr) {
    arr.map((v) => v + "tim");
    // arr.push("jake") Won't work
}
function data2(arr) { }
//Let's make tuple
function tupleFunc(arr) { }
function tupleFunc2(...arr) { }
// creating readonly tuple
function tupleFuncReadonly(...arr) {
    const [name, age, ...verified] = arr;
}
function setCordinates(arr) {
    const [x, y, z] = arr;
    console.log(`The given shape is ${arr.length}D shape`);
}
let testArr = [23, "jake", false];
// let testArr = [23, "jake", false] as const;
let testArr2 = [23, "jake", false];
// testArr2 = testArr;
// testArr = testArr2;
function distanceFromOrigin([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
let point = [2, 3];
// distanceFromOrigin(point); Won't work
