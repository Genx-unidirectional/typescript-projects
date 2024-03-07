// javascript has no notion while overriding the base class methods
//We have to explicitly need to say the base class with super keyword

class Base {
  greet() {
    console.log("Hello friend");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name == undefined) {
      super.greet();
    } else {
      console.log(`Hello ${name}`);
    }
  }
}

// we have to explicitly call the base class method with super keyword of if the

// We can put more specified type to the base class fields which are initialized in the base class we use declare keyword for the field which we are going to give more detailed type in the derived class

// Q-> Make the animal class whose fields get more specified type in it's derived dog class

interface AnimalFields {
  dateOfBirth: any;
}

interface DogFields extends AnimalFields {
  breed: any;
}

class AnimalBase {
  resident: AnimalFields;
  constructor(animal: AnimalFields) {
    this.resident = animal;
  }
}

// So in the dog we specify the fields in more detail
class Dog {
  declare resident: DogFields;
  constructor(animal: DogFields) {
    this.resident = animal;
  }
}

//Above here we specified the base class initialized field more clearly

// Access modifiers

class ApiData {
  public sampleData() {
    return "Sample data";
  }
  protected getData() {
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
  private x: number = 12;
}

const tP1 = new Base1();
// console.log(tP1.x);won't work
console.log(tP1["x"]); //Will work

// The above situation is because of soft private checks that means fields with private modifier is a feature only introduced by typescript if

//If want to hard private check we declare it using #
class Base2 {
  #x: number = 13;
}

const tP2 = new Base2();
// console.log(tP2.#x);
// console.log(tP2["#x" as keyof typeof tP2]);

// Static modifier
class Test {
  static x: number = 12;
  private y: number = 10;
  static {
    const num = Test.x;
  }
}

// we can make field static and use them via class name

// Generics in classes
class GenClass<T> {
  place: T;
  constructor(place: T) {
    this.place = place;
  }
}

//Behavior of this keyword
class Test2 {
  name: string = "Logan";
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
  name: string = "Andrew";
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
