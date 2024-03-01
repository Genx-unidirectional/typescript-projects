"use strict";
// We can create interface or type signature for object
function info(person) {
    return person.name;
}
function hasSpaceCovered(shape) {
    if (shape.xPos == null && shape.yPos == null) {
        return false;
    }
    else {
        return true;
    }
}
// instead of this we can use javascript to provide default value
function hasSpaceRefined({ shape, xPos = 0, yPos = 0 }) {
    return xPos * yPos;
}
const stud1 = {
    name: "Ganehs",
    class: "undergrad",
};
const home1 = {
    resident: { name: "tim", area: "north" },
};
// home1.resident = {} won't work
home1.resident.name = "jake";
const writableP1 = { name: "jake", age: 14 };
const readonlyP2 = writableP1;
// readonlyP2.age= 12 won't work
writableP1.age = 19;
console.log(readonlyP2.age); //Here change in writable reflect in readonly
const testStrArr = ["jake", "jade"];
//EXcessive type checking
function area(shape) {
    return {
        color: shape.color ? shape.color : "red",
        area: shape.width ? shape.width ** 2 : 0,
    };
}
const colorCircle = {
    color: "red",
    radius: 10,
};
const stringBox = {
    box: "tim",
};
const numberBox = {
    box: 10,
};
const boolBox = {
    box: false,
};
function setContents(boxer, contents) {
    boxer.box = contents;
}
const boxStr = {
    box: { contents: "Jake" },
};
