"use strict";
//Here we know that generics are like a echo what's come in goes out and they hold the type which was coming for the further use cases
function test(arg) {
    return arg;
}
test("tim");
function identity(arg) {
    return arg;
}
//Normal natation
const myIdentity = identity;
//function annotation inside the object
const myIdentity2 = identity;
//Another variation
const myIdentity3 = { ident: identity };
let myGenericNumber = {
    zeroValue: 0,
    add: function (x, y) {
        return x + y;
    },
};
//Constraints in generics
function TestTwo(arg) {
    return arg.length;
}
function testThree(arg) {
    return arg;
}
//Make the function which takes array of object and make another array based on specified key in that object
function makePropArr(arr, key) {
    return arr.map((item) => item[key]);
}
const userArr = [
    {
        id: 12,
        name: "gex",
        age: 21,
    },
    {
        id: 22,
        name: "tex",
        age: 22,
    },
    {
        id: 22,
        name: "wex",
        age: 223,
    },
    {
        id: 89,
        name: "rex",
        age: 24,
    },
    {
        id: 33,
        name: "mex",
        age: 34,
    },
    {
        id: 99,
        name: "fex",
        age: 78,
    },
];
console.log(makePropArr(userArr, "id"));
