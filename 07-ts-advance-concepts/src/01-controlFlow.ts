// Control Flow  Analysis

//Narrowing down the types

//Using if statement to narrow down the type
const x: number | string = "Ganesh";
if (typeof x === "string") {
  console.log(x.toUpperCase());
}

const obj = {
  chance: 1,
  name: "ganesh",
};

console.log("chance" in obj);

// Using types guards

// function isString(value: any): value is string {
//   return typeof value === "string";
// }

// const y: string | number = "tim";

// if (isString(y)) {
//   console.log(y.toUpperCase());
// } else {
//   console.log(y.toFixed(2));
// }

// Discriminated union types

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function area(shape: Shape): number {
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

type Responses =
  | { status: 200; data: any }
  | { status: 301; to: string }
  | { status: 400; error: Error };

// we can  make the function according to response we return data or error

function WhatTodo(response: Responses) {
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
  status: number;
  constructor() {
    this.status = 200;
  }
}

function assertResponse(obj: any): asserts obj is SuccessResponse {
  if (!(obj instanceof SuccessResponse)) {
    throw new Error("Not a instanceof SuccessResponse");
  }
}

const obj1 = new SuccessResponse();
console.log(assertResponse(obj1));

// Narrowing the type using as const

const arr = [1, 2, 3] as const;

// arr[0] = 22; we can't do this because the elements inside the array is readonly
