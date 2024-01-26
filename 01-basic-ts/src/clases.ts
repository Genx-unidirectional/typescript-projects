// class Person {
//   // music : string
//   // name : string
//   // age : number
//   // lang : string
//   constructor(
//     public readonly music: string,
//     public name: string,
//     private age: number,
//     protected lang: string = "Typescript"
//   ) {
//     this.music = music;
//     this.name = name;
//     this.age = age;
//     this.lang = lang;
//   }
//   getAge(): number {
//     return this.age;
//   }
// }

// const p1 = new Person("Phonk", "Gex", 21, "Typescript");

// console.log(p1.getAge());

// class Developer extends Person {
//   constructor(
//     public computer: string,
//     music: string,
//     name: string,
//     age: number
//   ) {
//     super(music, name, age);
//     this.computer = computer;
//   }
//   getLang(): string {
//     return this.lang;
//   }
// }

// const webdev = new Developer("Windows", "lofi", "Tim", 21);
// console.log(webdev.getLang());
// console.log(webdev.getAge());

// class Peeps {
//   static count: number = 0;
//   static getCount(): number {
//     return Peeps.count;
//   }
//   public id: number;
//   constructor(public name: string) {
//     this.name = name;
//     this.id = Peeps.count++;
//   }
// }

// const tim = new Peeps("tim");
// const jim = new Peeps("jim");
// const kim = new Peeps("kim");

// console.log(Peeps.getCount());

// // Making interface to create the musician class

// interface Musician2 {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }

// class Guitarist2 implements Musician2 {
//   name: string;
//   instrument: string;
//   constructor(name: string, instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }

//   play(action: string) {
//     return `${this.name} ${action} the ${this.instrument}`;
//   }
// }

// const Jane = new Guitarist2("Jane", "guitar");
// console.log(Jane.play("strums"));

// // Make the class with private property and use getter and setter to perform action on it

// class Info2 {
//   private data: string[];
//   constructor() {
//     this.data = [];
//   }
//   get datas(): string[] {
//     return this.data;
//   }
//   set datas(arr: string[]) {
//     if (Array.isArray(arr) && arr.every((el) => typeof el === "string")) {
//       this.data = arr;
//     } else {
//       throw new Error("Its not a valid array of strings");
//     }
//   }
// }

// let bond = new Info2();
// bond.datas = ["23", "gex"];
// console.log(bond.datas);
