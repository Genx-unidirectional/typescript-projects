// We can use class as a type also for inheritance

class Person {
  // The private modifier is not do same things in js that is does not behave when compile into js code
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}

class SuperHuman extends Person {
  constructor(readonly skill: string, name: string, age: number) {
    super(name, age);
    this.skill = skill;
  }
}

const S1: SuperHuman = new SuperHuman("speed", "ganesh", 21);

class User {
  #id: string; // creating private field
  name!: string;
  addedBonus?: boolean;
  constructor(id: string, name: string) {
    this.#id = id;
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
  getId = (): string => {
    return this.#id;
  };
  static draw = function (): string {
    return `how's the drawing`;
  };
  //Making a function with two overLoad
  //   writing the override function signatures
  run(): string;
  run(time: number): string;
  run(time?: number): string {
    if (typeof time === "number") {
      return `this.name runs in ${time}`;
    } else {
      return `${this.name} runs`;
    }
  }
}

// Using generics with classes

class Data<Type> {
  contents: Type;
  constructor(value: Type) {
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
  constructor(
    public name: string,
    private skill: string,
    protected age: number
  ) {}
}

const m1 = new Member("ganesh", "Ts", 21);

// Creating abstract class in TypeScript

// We can only use this class to extends other class but we can't make instance out of it
abstract class Extender {
  // Creating abstract method without implementation so that class which implement this class will be forced to implements this method
  abstract getPicsUrl(): string;
  //   conCreate method which can be override
  methodOverridable(): void {
    console.log("It's moving");
  }
}

class Test extends Extender {
  getPicsUrl(): string {
    return "www.example.com";
  }
  methodOverridable(): void {
    console.log("hopefully");
  }
}
