// //When we don't know the what type of parameter  we are getting into the function or somewhere else we have to make it general so that we can accept it and make further decision of what action should we take on it adn what we have to return.

// function func1<T>(arg: T): T {
//   return arg;
// }

// // In above function we are returning the type that  we are passing into  the function

// //Make the function which takes the argument of any type and return true or false based on it is an object or not

// const isObj = <T>(arg: T): boolean => {
//   return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
// };

// // console.log(isObj([]));
// // console.log(isObj([1, 2]));
// // console.log(isObj({}));
// // console.log(isObj(false));
// // console.log(isObj(null));

// // Create function who checks the given value is true or false based on its truth value also it should return false when object or array is empty

// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   if (Array.isArray(arg) && arg.length === 0) {
//     return { arg, is: false };
//   }
//   if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
//     return { arg, is: false };
//   }
//   return { arg, is: !!arg };
// };

// console.log(isTrue({}));
// console.log(isTrue([]));
// console.log(isTrue(false));
// console.log(isTrue([9, 9]));
// console.log(isTrue({ name: "gex" }));

// interface BoolCheck<T> {
//   value: T;
//   is: boolean;
// }

// const isTrue2 = <T>(arg: T): BoolCheck<T> => {
//   if (Array.isArray(arg) && arg.length === 0) {
//     return { value: arg, is: false };
//   }
//   if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
//     return { value: arg, is: false };
//   }
//   return { value: arg, is: !!arg };
// };

// // We can constrict the Generic type by extending it with interface
// interface HasId {
//   id: number;
// }

// const processUser = <T extends HasId>(user: T): T => {
//   return user;
// };

// // const func2 = <T>(arg:T):T=>{
// //     return arg;
// // }

// // const isObj2 = <T>(arg: T): boolean => {
// //   return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
// // };

// // const isTrue3 = <T>(arg: T): { arg: T; is: boolean } => {
// //   if (Array.isArray(arg) && arg.length === 0) {
// //     return { arg, is: false };
// //   }
// //   if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
// //     return { arg, is: false };
// //   }
// //   return { arg, is: !!arg };
// // };

// // interface BoolCheck2<T> {
// //   value: T;
// //   is: boolean;
// // }

// // const isTrue4 = <T>(arg: T): BoolCheck2<T> => {
// //   if (Array.isArray(arg) && arg.length === 0) {
// //     return { value: arg, is: false };
// //   }
// //   if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
// //     return { value: arg, is: false };
// //   }
// //   return { value: arg, is: !!arg };
// // };

// // interface HasId2{
// //     id:number;
// // }

// // const processUser2 = <T extends HasId2>(user:T):T=>{
// //     return user;
// // }

// const usersArray = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
// ];

// // Make generic function which has array of object and inside that is has property whoose type are unknown to us and it must contain id

// const printDataArr = <T extends HasId, K extends keyof T>(
//   arr: T[],
//   key: K
// ): T[K][] => {
//   return arr.map((el) => el[key]);
// };

// console.log(printDataArr(usersArray, "id"));

// //Let's make a class whose constructor takes value of generic type in other term value we don't know and set it to it's private variable

// class UserData<T> {
//   private data: T;
//   constructor(value: T) {
//     this.data = value;
//   }
//   get info(): T {
//     return this.data;
//   }
//   set info(value: T) {
//     this.data = value;
//   }
// }

// // The above class act like it will lock the data type which you pass in a instance

// const larry = new UserData("larry");

// console.log(larry.info);

// // larry.info = 12; We can see that here that we cannot assign the other type into the object instance we made from the class UserData it lock out data type which we are passing at making a instance instead we can do this

// const marry = new UserData<string | number | boolean | (string | number)[]>(
//   "jake"
// );
// console.log(marry.info);

// marry.info = [2, 3, 1, "t-rex"]; //Now we can do this as we set the types above

// Generics use when we don't know what data is coming in

const func1 = <T>(arg: T): T => {
  return arg;
};
//Generics are kind og echos they return what they got

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj([]));
console.log(isObj([1, 2]));
console.log(isObj({}));
console.log(isObj({ name: "ganesh" }));
console.log(isObj(false));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && arg.length === 0) {
    return { arg, is: false };
  }
  if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

interface CheckBool<T> {
  value: T;
  is: boolean;
}

const isTrue2 = <T>(arg: T): CheckBool<T> => {
  if (Array.isArray(arg) && arg.length === 0) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// const var1 = <number | string>"hello";

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

// Basically we have user array having object and their type are unknown we jave to make the generic so that we can pass that list and then we pass he key of the property that object inside the list contain and we get array of those property

interface HasId {
  id: number;
}

const propArrFunc = <T extends HasId, K extends keyof T>(
  arr: T[],
  key: K
): T[K][] => {
  return arr.map((item) => item[key]);
};

console.log(propArrFunc(usersArray, "email"));
