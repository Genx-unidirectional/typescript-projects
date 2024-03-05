// simple example

interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

class NullLogger implements Logger {
  log(message: string) {
    //Do nothing
  }
}

//Real world problem

//Imagine we have users those users can login but who is admin and who is not that we have to decide

interface UserSchema {
  id: number;
  name: string;
  hasAccess: () => boolean;
}

class User implements UserSchema {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
  hasAccess(): boolean {
    return this.name === "BOB";
  }
}

class NullUser implements UserSchema {
  public id: number;
  public name: string;
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    return false;
  }
}

// Above we created class for users

const userArr: User[] = [
  new User(1, "ganesh"),
  new User(2, "BOB"),
  new User(3, "ashley"),
  new User(4, "rutnik"),
];

// if nullObject is not present

function getUser1(id: number): User | undefined {
  let user = userArr.find((user) => user.id === id);
  return user;
}

//With null object
function getUser2(id: number): User {
  let user = userArr.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

//without null object

function printUser1(id: number) {
  const user = getUser1(id);
  let name = user?.name ? user.name : "guest";
  if (user?.hasAccess?.()) {
    console.log("Welcome admin");
  } else {
    console.log("You don't have permission to be here");
  }
}

function printUser2(id: number) {
  const user = getUser2(id);
  console.log(user.name);
  if (user.hasAccess()) {
    console.log("Welcome admin");
  } else {
    console.log("You don't have permission here");
  }
}
