// let's consider the pizza we don't know what customer want cheese topping,  pepperoni toppings , mushrooms toppings so these three toppings may or may not be present and according to that we have to create the object

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
