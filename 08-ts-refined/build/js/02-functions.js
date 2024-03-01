"use strict";
// Let's create function which takes function
const greet = (fn) => {
    fn("Hello world!");
};
function printMsg(str) {
    console.log(str);
}
function fn(ctor) {
    return new ctor("Tim");
}
function fn2(ctor) {
    return new ctor("Tim");
}
//Q-Create the generic for the map function ;
function map(arr, callback) {
    return arr.map(callback);
}
// So above me make the function which takes input of any type of array and perform function and return the array of output type
const newArr = map([1, 2, 3], (a) => a.toString());
//Q create the generic function which takes two argument which should constraint the {length : number} property in them and check who has length bigger and return that argument
function minimumLength(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1;
    }
    else {
        return arr2;
    }
}
//Q-Create function with generic in which we later can explicit tells the function that what type of argument we taking in
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// let's experiment this function
console.log(combine([1, 2, 3], [23, 1]));
// but what when we have two different types of array
// we can explicitly tell the function that we have two different types of array by providing union type in it
console.log(combine([1, 2, 3], ["tim", "jake"]));
//Q-create generic function for filter function of array
function filterArr(arr, filterFunc) {
    return arr.filter(filterFunc);
}
// In order to adhere to both condition we have to make the two parameters in the function optional
function makeDate(mOrTimeStamp, d, y) {
    if (d != undefined && y != undefined) {
        return new Date(mOrTimeStamp, d, y);
    }
    else {
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
function getDb() {
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
const adminArr = (dbGetter, callback) => {
    return dbGetter().filter(callback);
};
function callback(item) {
    return item.admin;
}
const admins = adminArr(getDb, callback);
// different return types in function
// we can return void if we don't want to return anything or any exclusive return in function
function giveMessage() {
    console.log("Hello people");
}
// the void and undefined are different
//Never in function
function laceIt(str) {
    throw new Error("Do it yourself!");
}
// Also never is return when there is nothing left in union
function checkVal(x) {
    if (typeof x === "string") {
        return x;
    }
    else if (typeof x == "number") {
        return x;
    }
    else {
        return x; //Here type of x is never because all unions are over
    }
}
//Using rest parameters in function
function multiply(factor, arr) {
    return arr.map((item) => item * factor);
}
//Making tuple
const arr = [1, 2, 3];
//Destructuring in function
function getObj({ a, b, c }) { }
const letsSee = () => {
    return "j";
};
const anotherOne = () => {
    return true;
};
const getter = anotherOne;
