// let's consider the pizza we don't know what customer want cheese topping,  pepperoni toppings , mushrooms toppings so these three toppings may or may not be present and according to that we have to create the object

//Making the base class with requirement and fulfilled it with base class

// making the builder interface for pizza

interface PizzaBuilder {
  toppings: string[];
  size: string;
}

// Making the class having the pizza requirements which fulfilled by pizzaBuilder

class Pizza {
  private toppings: string[];
  private size: string;
  constructor(builder: PizzaBuilder) {
    this.toppings = builder.toppings;
    this.size = builder.size;
  }

  describe(): void {
    console.log(`The size of pizza is ${this.size}`);
    console.log(`The toppings of pizza is ${this.toppings.join(" ")}`);
  }
}

class PizzaBuilderImpl implements PizzaBuilder {
  toppings: string[];
  size: string;
  constructor(size: string) {
    this.toppings = [];
    this.size = size;
  }
  addToppings(toppings: string): PizzaBuilderImpl {
    this.toppings.push(toppings);
    return this;
  }
  build(): Pizza {
    return new Pizza(this);
  }
}

const pizza1 = new PizzaBuilderImpl("medium")
  .addToppings("pepperoni")
  .addToppings("cheese")
  .addToppings("mushrooms")
  .build();

console.log(pizza1);

//Using javascript specific approach

interface AddressClass {
  zip: number;
  city: string;
}

class Address implements AddressClass {
  constructor(public zip: number, public city: string) {
    this.zip = zip;
    this.city = city;
  }
}

type OptionalSchema = {
  age?: number;
  email?: string;
  address?: AddressClass;
};

class Employee {
  age: number | undefined;
  email: string | undefined;
  address: AddressClass | undefined;
  constructor(
    public name: string,
    { age, email, address }: OptionalSchema = {}
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }
  describe(): void {
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
  private name: string;
  private age: number = 21;
  private email: string = "exampl@gmail.com";
  private address?: Address;
  constructor(name: string) {
    this.name = name;
  }

  setAge(age: number): EmployeeBuilder {
    this.age = age;
    return this;
  }
  setEmail(email: string): EmployeeBuilder {
    this.email = email;
    return this;
  }
  setAddress(address: Address): EmployeeBuilder {
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
