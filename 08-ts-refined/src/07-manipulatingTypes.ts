//Here we know that generics are like a echo what's come in goes out and they hold the type which was coming for the further use cases
function test<Type>(arg: Type): Type {
  return arg;
}

test<string>("tim");

function identity<T>(arg: T): T {
  return arg;
}
//Normal natation
const myIdentity: <T>(arg: T) => T = identity;
//function annotation inside the object
const myIdentity2: { <T>(arg: T): T } = identity;
//Another variation
const myIdentity3: { ident: <T>(arg: T) => T } = { ident: identity };

//using the interface for generics

interface ExampleIdentity<Type> {
  (arg: Type): Type;
}

interface GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber: GenericNumber<number> = {
  zeroValue: 0,
  add: function (x, y) {
    return x + y;
  },
};

//Constraints in generics
function TestTwo<T extends { length: number }>(arg: T): number {
  return arg.length;
}

//Using keyof in the generics

interface HasId {
  id: number;
}

function testThree<T extends HasId>(arg: T): T {
  return arg;
}

//Make the function which takes array of object and make another array based on specified key in that object

function makePropArr<T, K extends keyof T>(arr: T[], key: K): T[K][] {
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
