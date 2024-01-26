// Utility types

//Partial utility : In this we can use any one type inside of interface rather than inferring overall interface

interface Assignment {
  name: string;
  id: number;
  class: string;
  subject?: string;
}

let stud1: Assignment = {
  name: "t-rex",
  id: 1,
  class: "jurrasic",
  subject: "biting class",
};

// So from above object we want to change one of the property we use partial class to do that so

const assignmentChange = (
  assignment: Assignment,
  changingProp: Partial<Assignment>
): Assignment => {
  return { ...assignment, ...changingProp };
};

//Required utility : This utility mandate the all types should be present inside the object even some of them are set to be optional

const recordAssignment = (assignment: Required<Assignment>): Assignment => {
  return assignment;
};

//Readonly utility :When assign to any object we cannot modify its properties

const assignVerified: Readonly<Assignment> = { ...stud1 };

//Record utility : This is used to create key and value types

type Students = "sara" | "laura";

type grades = "A" | "B" | "C" | "D" | "E";

const studInfo: Record<Students, grades> = {
  sara: "A",
  laura: "E",
};

const hexColorMap: Record<string, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

//Pick and assign

const stud2: Pick<Assignment, "class" | "id"> = {
  class: "A",
  id: 2,
};

const stud3: Omit<Assignment, "class" | "id"> = {
  name: "rex",
};

//Extract ans Exclude

type AlpGrades = Exclude<grades, "A" | "B">;
type AlpGrades2 = Extract<grades, "A" | "B">;

//NonNullable : It only pick truthy values

type AllPossibleValues = NonNullable<"jim" | null | undefined | "carol">;

// type BasedReturn = {
//   title: string;
// };

const func3 = (title: string, points: number) => {
  return { title, points };
};

type BasedReturn = ReturnType<typeof func3>;

type basedParams = Parameters<typeof func3>;
