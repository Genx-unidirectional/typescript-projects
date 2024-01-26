// type Info = {
//   [index: string]: string | number;
//   name: string;
//   age: number;
//   work: string;
// };

// let obj: Info = {
//   name: "Ganesh",
//   age: 21,
//   work: "grinding",
// };

// let objName: string = "name";

// console.log(obj[objName]);

// type Transaction = {
//   books: number;
//   job: number;
//   food: number;
// };

// const todayTransact: Transaction = {
//   books: -10,
//   job: 50,
//   food: -10,
// };

// function netTransaction(transactions: Transaction): number {
//   let total = 0;
//   for (let money in transactions) {
//     total += transactions[money as keyof Transaction];
//   }
//   return total;
// }

// //Create student type then the student object and then create loops which iterate through that student object

// type Student = {
//   name: string;
//   GPA: number;
//   class: (string | number)[];
// };

// const student: Student = {
//   name: "gex",
//   GPA: 3.4,
//   class: ["100", "300"],
// };

// for (let key in student) {
//   console.log(student[key as keyof typeof student]);
// }
