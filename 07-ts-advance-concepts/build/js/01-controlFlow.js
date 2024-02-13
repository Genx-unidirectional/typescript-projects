"use strict";
// Control Flow  Analysis
//Narrowing down the types
//Using if statement to narrow down the type
const x = "Ganesh";
if (typeof x === "string") {
    console.log(x.toUpperCase());
}
const obj = {
    chance: 1,
    name: "ganesh",
};
console.log("chance" in obj);
function area(shape) {
    switch (shape.kind) {
        case "square": {
            return shape.size * shape.size;
        }
        case "rectangle": {
            return shape.width * shape.height;
        }
        default:
            throw new Error("Invalid shape");
    }
}
// we can  make the function according to response we return data or error
function WhatTodo(response) {
    switch (response.status) {
        case 200: {
            return response.data;
        }
        case 301: {
            return response.status;
        }
        case 400: {
            return response.error;
        }
    }
}
class SuccessResponse {
    status;
    constructor() {
        this.status = 200;
    }
}
function assertResponse(obj) {
    if (!(obj instanceof SuccessResponse)) {
        throw new Error("Not a instanceof SuccessResponse");
    }
}
const obj1 = new SuccessResponse();
console.log(assertResponse(obj1));
// Narrowing the type using as const
const arr = [1, 2, 3];
// arr[0] = 22; we can't do this because the elements inside the array is readonly
