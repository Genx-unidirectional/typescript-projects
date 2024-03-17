"use strict";
// consider following example
// in below example we use size to console.log how much item is big
function Markup(item) {
    if (item.fabricSize == "sm") {
        console.log("item is small");
    }
    else {
        console.log("item is large");
    }
}
// type OmitString<Type extends string> = Type | Omit<string, Type>;
// another function
function Test(item) {
    if (item == "sm") {
        console.log("item is small");
    }
    else {
        console.log("item is big");
    }
}
function Test2(item) {
    if (item == "sm") {
        //here we loose our our intellisense
        console.log("item is small");
    }
    else {
        console.log("item is big");
    }
}
