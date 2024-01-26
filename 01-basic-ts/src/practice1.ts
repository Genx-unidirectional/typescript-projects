// Typescript is strongly typed language which throws error at runtime

// TYpes in typescript

let a1: number = 9;
let a2: string = "Gex";
let a3: boolean = false;
let a4: string | number = 23;
let a5: (number | string)[] = [23, "Ganesh", 1];
let a6: any = 2;
let a7: never;
let a8: unknown;
let a9: null;
let a10: undefined;

// Using types with arrays

let arr1 = [1, 2, 4, 5];
let arr2 = ["tim", "kate", "jade"];
let arr3 = ["tim", 3];
let arr4: [number, string, boolean] = [34, "tim", false];
let arr5 = [34, "tim", false];
// arr4 = arr5;
arr5 = arr4;

// Using types with function

function sum(a: number, b: number): number {
  return a + b;
}

function sum2(a: number, b: number, c?: number): number {
  if (c === undefined) return a + b;
  return a + b + c;
}

// Using types and interface to create function

type numOps = (a: number, b: number) => number;

interface numOps2 {
  (a: number, b: number): number;
}

const sub: numOps = (a, b) => {
  return a - b;
};

const sub2: numOps2 = (a, b) => {
  return a - b;
};

//Using types to create the Object

type Person = {
  name: string;
  age: number;
  team: string;
};
interface Person2 {
  name: string;
  age: number;
  team: string;
}

const p1: Person = {
  name: "Tim",
  age: 21,
  team: "MI",
};

const p2: Person2 = {
  name: "Jake",
  age: 23,
  team: "RCB",
};

//Making assertions

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let result = addOrConcat(1, 2, "concat") as string; //We have typed string here we know we are returning string here

// Where we can make assertions more

let year = document.querySelector("#year") as HTMLSpanElement;
// console.log(year);
let newYear: string = new Date().getFullYear().toString();
year.setAttribute("data-year", newYear);
year.textContent = newYear;

type Transaction = {
  books: number;
  job: number;
  protein: number;
};

let todayTransaction: Transaction = {
  books: -10,
  job: -50,
  protein: -20,
};

let protein: string = "protein";

// console.log(todayTransaction.books);
// console.log(todayTransaction[protein as keyof Transaction]);

function totalIncome(transactions: Transaction): number {
  let total = 0;
  for (let money in transactions) {
    total += transactions[money as keyof Transaction];
  }
  return total;
}

for (let key in todayTransaction) {
  //   console.log(todayTransaction[key as keyof typeof todayTransaction]);
}

// Using types in classes

class Person3 {
  // music : string
  // name : string
  // age : number
  // lang : string
  constructor(
    public readonly music: string,
    public name: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.music = music;
    this.name = name;
    this.age = age;
    this.lang = lang;
  }
  getAge(): number {
    return this.age;
  }
}

const ganesh = new Person3("Phonk", "Ganesh", 21, "JS");
// console.log(ganesh.getAge());

class Developer extends Person3 {
  constructor(
    public computer: string,
    music: string,
    name: string,
    age: number
  ) {
    super(music, name, age);
    this.computer = computer;
  }
  getLang() {
    return this.lang;
  }
}

let dev1 = new Developer("Windows", "lofi", "rex", 22);

// console.log(dev1.getLang());

// Make the class having static variable which increment each time when class instance is created and assign it to that instance id

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const tim = new Peeps("tim");
const jim = new Peeps("jim");
const vim = new Peeps("vim");
console.log(Peeps.getCount());

// Make the private vaiable and set getter and setter to manipulate it

class Bonds {
  private data: string[];
  constructor() {
    this.data = [];
  }
  get info(): string[] {
    return this.data;
  }
  set info(value: string[]) {
    this.data = value;
  }
}

const b1 = new Bonds();
b1.info = ["tim", "jake", "sachin"];
console.log(b1.info);

// Creating interface to crate class

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

let Olivia = new Guitarist("Olivia", "guitar");

console.log(Olivia.play("strumps"));
