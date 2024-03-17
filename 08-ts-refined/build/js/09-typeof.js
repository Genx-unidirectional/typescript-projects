"use strict";
const a1 = "jumper";
function Checker(arg) {
    return arg > 12;
}
//Limitation we can only take type from identifier not from their executions
// type TReturn2 = ReturnType<typeof Checker(12)>; Won't work
