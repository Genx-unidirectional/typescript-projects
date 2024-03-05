"use strict";
// let's consider the pizza we don't know what customer want cheese topping,  pepperoni toppings , mushrooms toppings so these three toppings may or may not be present and according to that we have to create the object
// Making the class having the pizza requirements which fulfilled by pizzaBuilder
class Pizza {
    toppings;
    size;
    constructor(builder) {
        this.toppings = builder.toppings;
        this.size = builder.size;
    }
    describe() {
        console.log(`The size of pizza is ${this.size}`);
        console.log(`The toppings of pizza is ${this.toppings.join(" ")}`);
    }
}
class PizzaBuilderImpl {
    toppings;
    size;
    constructor(size) {
        this.toppings = [];
        this.size = size;
    }
    addToppings(toppings) {
        this.toppings.push(toppings);
        return this;
    }
    build() {
        return new Pizza(this);
    }
}
const pizza1 = new PizzaBuilderImpl("medium")
    .addToppings("pepperoni")
    .addToppings("cheese")
    .addToppings("mushrooms")
    .build();
console.log(pizza1);
class Address {
    zip;
    city;
    constructor(zip, city) {
        this.zip = zip;
        this.city = city;
        this.zip = zip;
        this.city = city;
    }
}
class Employee {
    name;
    age;
    email;
    address;
    constructor(name, { age, email, address } = {}) {
        this.name = name;
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    describe() {
        console.log(`Name of employee is ${this.name}`);
        console.log(`Age of employee is ${this.age}`);
        console.log(`Email of employee is ${this.email}`);
        if (this.address) {
            console.log(`City of employee is ${this.address.city}`);
        }
    }
}
// Creating builder class for Employee
class EmployeeBuilder {
    name;
    age = 21;
    email = "exampl@gmail.com";
    address;
    constructor(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    setEmail(email) {
        this.email = email;
        return this;
    }
    setAddress(address) {
        this.address = address;
        return this;
    }
    build() {
        return new Employee(this.name, {
            age: this.age,
            email: this.email,
            address: this.address,
        });
    }
}
const employee1 = new EmployeeBuilder("Ganesh")
    .setAge(22)
    .setEmail("ganesh@gmail.com")
    .setAddress(new Address(421, "kalyan"))
    .build();
employee1.describe();
