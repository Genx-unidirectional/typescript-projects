"use strict";
//Q-make the function argument in such way that they could accept the specific argument conditionally
//Here in below function we have the first argument and second argument is optional based on what first argument so make the function argument type check in such way that it check it's second argument is what and it should present or not based on the first argument
// const sendEvent = (eventType: TEvent["type"], payload?: any) => {};
// sendEvent("SIGN_OUT", {});
// sendEvent("LOG_IN", { userId: "101" });
// corrected code
//below here are reason out the second argument on the fly i.e we create a tuple so as to reason out the whats coming which gives better type checking
const sendEvent = (...args) => { };
sendEvent("LOG_IN", { userId: "101" });
sendEvent("SIGN_OUT");
//So basically when the we are passing the arguments and which is of type object and second argument is based on first argument should be present or not that's why we crate tuple by reasoning out the first argument on the fly
