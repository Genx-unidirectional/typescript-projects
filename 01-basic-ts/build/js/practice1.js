"use strict";
// Typescript is strongly typed language which throws error at runtime
// TYpes in typescript
let a1 = 9;
let a2 = "Gex";
let a3 = false;
let a4 = 23;
let a5 = [23, "Ganesh", 1];
let a6 = 2;
let a7;
let a8;
let a9;
let a10;
// Using types with arrays
let arr1 = [1, 2, 4, 5];
let arr2 = ["tim", "kate", "jade"];
let arr3 = ["tim", 3];
let arr4 = [34, "tim", false];
let arr5 = [34, "tim", false];
// arr4 = arr5;
arr5 = arr4;
// Using types with function
function sum(a, b) {
    return a + b;
}
function sum2(a, b, c) {
    if (c === undefined)
        return a + b;
    return a + b + c;
}
const sub = (a, b) => {
    return a - b;
};
const sub2 = (a, b) => {
    return a - b;
};
const p1 = {
    name: "Tim",
    age: 21,
    team: "MI",
};
const p2 = {
    name: "Jake",
    age: 23,
    team: "RCB",
};
//Making assertions
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let result = addOrConcat(1, 2, "concat"); //We have typed string here we know we are returning string here
// Where we can make assertions more
let year = document.querySelector("#year");
// console.log(year);
let newYear = new Date().getFullYear().toString();
year.setAttribute("data-year", newYear);
year.textContent = newYear;
let todayTransaction = {
    books: -10,
    job: -50,
    protein: -20,
};
let protein = "protein";
// console.log(todayTransaction.books);
// console.log(todayTransaction[protein as keyof Transaction]);
function totalIncome(transactions) {
    let total = 0;
    for (let money in transactions) {
        total += transactions[money];
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
    constructor(music, name, age, lang = "Typescript") {
        this.music = music;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const ganesh = new Person3("Phonk", "Ganesh", 21, "JS");
// console.log(ganesh.getAge());
class Developer extends Person3 {
    constructor(computer, music, name, age) {
        super(music, name, age);
        this.computer = computer;
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
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const tim = new Peeps("tim");
const jim = new Peeps("jim");
const vim = new Peeps("vim");
console.log(Peeps.getCount());
// Make the private vaiable and set getter and setter to manipulate it
class Bonds {
    constructor() {
        this.data = [];
    }
    get info() {
        return this.data;
    }
    set info(value) {
        this.data = value;
    }
}
const b1 = new Bonds();
b1.info = ["tim", "jake", "sachin"];
console.log(b1.info);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
let Olivia = new Guitarist("Olivia", "guitar");
console.log(Olivia.play("strumps"));
