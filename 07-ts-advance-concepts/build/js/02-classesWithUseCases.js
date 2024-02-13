"use strict";
// We can use class as a type also for inheritance
class Person {
    name;
    age;
    // The private modifier is not do same things in js that is does not behave when compile into js code
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
class SuperHuman extends Person {
    skill;
    constructor(skill, name, age) {
        super(name, age);
        this.skill = skill;
        this.skill = skill;
    }
}
const S1 = new SuperHuman("speed", "ganesh", 21);
class User {
    #id; // creating private field
    name;
    addedBonus;
    constructor(id, name) {
        this.#id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getId = () => {
        return this.#id;
    };
    static draw = function () {
        return `how's the drawing`;
    };
    run(time) {
        if (typeof time === "number") {
            return `this.name runs in ${time}`;
        }
        else {
            return `${this.name} runs`;
        }
    }
}
// Using generics with classes
class Data {
    contents;
    constructor(value) {
        this.contents = value;
    }
}
const c1 = new Data("ganesh");
// console.log(typeof Data);
// console.log(typeof User);
// console.log(typeof c1);
// In javascript we can create the classes with constructor to set the property values
// But in typescript we can set it in directly into parameter
class Member {
    name;
    skill;
    age;
    constructor(name, skill, age) {
        this.name = name;
        this.skill = skill;
        this.age = age;
    }
}
const m1 = new Member("ganesh", "Ts", 21);
// Creating abstract class in TypeScript
// We can only use this class to extends other class but we can't make instance out of it
class Extender {
    //   conCreate method which can be override
    methodOverridable() {
        console.log("It's moving");
    }
}
class Test extends Extender {
    getPicsUrl() {
        return "www.example.com";
    }
    methodOverridable() {
        console.log("hopefully");
    }
}
