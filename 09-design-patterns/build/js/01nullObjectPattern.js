"use strict";
// simple example
class ConsoleLogger {
    log(message) {
        console.log(message);
    }
}
class NullLogger {
    log(message) {
        //Do nothing
    }
}
class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
    hasAccess() {
        return this.name === "BOB";
    }
}
class NullUser {
    id;
    name;
    constructor() {
        this.id = -1;
        this.name = "Guest";
    }
    hasAccess() {
        return false;
    }
}
// Above we created class for users
const userArr = [
    new User(1, "ganesh"),
    new User(2, "BOB"),
    new User(3, "ashley"),
    new User(4, "rutnik"),
];
// if nullObject is not present
function getUser1(id) {
    let user = userArr.find((user) => user.id === id);
    return user;
}
//With null object
function getUser2(id) {
    let user = userArr.find((user) => user.id === id);
    if (user == null) {
        return new NullUser();
    }
    else {
        return user;
    }
}
//without null object
function printUser1(id) {
    const user = getUser1(id);
    let name = user?.name ? user.name : "guest";
    if (user?.hasAccess?.()) {
        console.log("Welcome admin");
    }
    else {
        console.log("You don't have permission to be here");
    }
}
function printUser2(id) {
    const user = getUser2(id);
    console.log(user.name);
    if (user.hasAccess()) {
        console.log("Welcome admin");
    }
    else {
        console.log("You don't have permission here");
    }
}
