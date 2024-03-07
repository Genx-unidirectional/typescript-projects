"use strict";
// javascript has no notion while overriding the base class methods
//We have to explicitly need to say the base class with super keyword
class Base {
    greet() {
        console.log("Hello friend");
    }
}
class Derived extends Base {
    greet(name) {
        if (name == undefined) {
            super.greet();
        }
        else {
            console.log(`Hello ${name}`);
        }
    }
}
class AnimalBase {
    resident;
    constructor(animal) {
        this.resident = animal;
    }
}
// So in the dog we specify the fields in more detail
class Dog {
    constructor(animal) {
        this.resident = animal;
    }
}
//Above here we specified the base class initialized field more clearly
// Access modifiers
class ApiData {
    sampleData() {
        return "Sample data";
    }
    getData() {
        return "Data";
    }
}
class ApiDerived extends ApiData {
    howdy() {
        console.log("This is a public class");
        console.log(this.getData()); //the protected properties only accessible inside the base class
    }
}
const d1 = new ApiDerived();
// Private modifier
class Base1 {
    x = 12;
}
const tP1 = new Base1();
// console.log(tP1.x);won't work
console.log(tP1["x"]); //Will work
// The above situation is because of soft private checks that means fields with private modifier is a feature only introduced by typescript if
//If want to hard private check we declare it using #
class Base2 {
    #x = 13;
}
const tP2 = new Base2();
// console.log(tP2.#x);
// console.log(tP2["#x" as keyof typeof tP2]);
// Static modifier
class Test {
    static x = 12;
    y = 10;
    static {
        const num = Test.x;
    }
}
// we can make field static and use them via class name
// Generics in classes
class GenClass {
    place;
    constructor(place) {
        this.place = place;
    }
}
//Behavior of this keyword
class Test2 {
    name = "Logan";
    getName() {
        return this.name;
    }
}
const t1 = new Test2();
const testObj = {
    name: "jake",
    getName: t1.getName,
};
console.log(t1.getName());
console.log(testObj.getName());
class Test3 {
    name = "Andrew";
    getName = () => {
        return this.name;
    };
}
const t2 = new Test3();
console.log(t2.getName());
const testObj2 = {
    name: "Tristan",
    getName: t2.getName,
};
console.log(testObj2.getName());
