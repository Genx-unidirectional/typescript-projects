interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];

//below fails
// function printData(person:Person):void{
//     switch(person.type){
//         case "admin":{
//             console.log(person.role)
//         }
//         case "user":{
//             console.log(person)
//         }
//     }
// }

function isAdmin(person: Person): person is Admin {
  return person.type === "admin";
}
function isUser(person: Person): person is User {
  return person.type === "user";
}

persons.forEach((person) => {
  if (isAdmin(person)) {
    console.log(person.role);
  }
  if (isUser(person)) {
    console.log(person.occupation);
  }
});
