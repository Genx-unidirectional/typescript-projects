// when should i use generics

// Q- Make the two interfaces and narrow them but here a catch you don't know what's coming so you have to use generics.

interface Animal {
  name: string;
}
interface Human {
  firstName: string;
  lastName: string;
}

// const getName = <TItem extends Human | Animal>(
//   item: TItem
// ): TItem extends Human ? { firstName: string } : { animalName: string } => {
//   if ("name" in item) {
//     return { animalName: item.name };
//   }else{
//     return {firstName:item.firstName}
//   }
// };

// const result = getName({ name: "puppy" });
// const result2 = getName({ firstName: "Tim", lastName: "roker" });
