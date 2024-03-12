"use strict";
// when should i use generics
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
