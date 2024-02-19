"use strict";
function greet(fn) {
    fn("hello world!");
}
function printToConsole(a) {
    console.log(a);
}
function greet2(fn) {
    fn("Hello champ");
}
const fn1 = (a) => {
    return a > 3;
};
fn1.description = "greater than 3 checker";
function doSomething(fn) {
    console.log(`${fn.description} returns  ${fn(6)}`);
}
function test(fn) {
    new fn("Hello world!");
}
// Using generics in function argument
// below function takes the argument as array but return type is any
function firstElement(arr) {
    return arr[0];
}
// We want return the type of array instead
function firstElement2(arr) {
    return arr[0];
}
// So when we pass the arr having specific type we infer this with generic so instead returning any we return the type that array holds
const s = firstElement2([1, 2, 3]);
const p = firstElement2(["ganesh", "gex", "genx"]);
const e = firstElement([1, 2, 3]); //e has any type because we didn't specify the type that array holds
//We can use multiple generics
// Let's create the function which takes array of string and convert each element in array into number and return the number array
// We will make this using generics
function map(arr, func) {
    return arr.map(func);
}
// The above code we simply made generic return type for map function
const arr2 = map(["1", "2", "3"], (n) => parseInt(n)); //We can see that typescript automatically infer the arr2 has number[] type
// We can set constraints to the generics
// Let's say we taking two array as a argument and return whose length is greater than who
function longest(arr1, arr2) {
    if (arr1.length >= arr2.length) {
        return arr1;
    }
    else {
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
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combine([1, 2, 4], [5, 6, 7]));
// console.log(combine([1, 2, 4], ["23"])); //We can't specify more than one type of value here
// Instead we do this ,
console.log(combine([1, 2, 3], ["23"]));
// In above example we explicitly specify the type to the generic rather than let it implicitly decide
// Let's make generic for array filter method
function filter(arr, func) {
    return arr.filter(func);
}
// Bad code>>
function test2(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i);
    }
}
function makeDate(mOrTimeStamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(mOrTimeStamp, d, y);
    }
    else {
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
// if we want to use this in function using type signatures we already infer the this to user type
const filterDb = (db, filterFunc) => {
    return db.filter(filterFunc);
};
const users = filterDb(getDb(), function (user) {
    return user.admin === true;
});
console.log(users);
// using rest parameter
function makeNewArr(n, ...arr) {
    return arr.map((i) => i * n);
}
const textFn1 = () => {
    return true;
};
