"use strict";
// Utility types
let stud1 = {
    name: "t-rex",
    id: 1,
    class: "jurrasic",
    subject: "biting class",
};
// So from above object we want to change one of the property we use partial class to do that so
const assignmentChange = (assignment, changingProp) => {
    return Object.assign(Object.assign({}, assignment), changingProp);
};
//Required utility : This utility mandate the all types should be present inside the object even some of them are set to be optional
const recordAssignment = (assignment) => {
    return assignment;
};
//Readonly utility :When assign to any object we cannot modify its properties
const assignVerified = Object.assign({}, stud1);
const studInfo = {
    sara: "A",
    laura: "E",
};
const hexColorMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};
//Pick and assign
const stud2 = {
    class: "A",
    id: 2,
};
const stud3 = {
    name: "rex",
};
// type BasedReturn = {
//   title: string;
// };
const func3 = (title, points) => {
    return { title, points };
};
