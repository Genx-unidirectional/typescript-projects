//the key of create union types of the all keys of an object
const obj1 = {
  name: "ganesh",
  age: 22,
  team: "A",
};

type K = keyof typeof obj1;

interface Gamer {
  name: string;
  age: number;
  type: string;
}

type KGame = keyof Gamer;
