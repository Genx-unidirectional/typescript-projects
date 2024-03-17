//Q-make the function argument in such way that they could accept the specific argument conditionally

type TEvent =
  | {
      type: "LOG_IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SIGN_OUT";
    };

//Here in below function we have the first argument and second argument is optional based on what first argument so make the function argument type check in such way that it check it's second argument is what and it should present or not based on the first argument
// const sendEvent = (eventType: TEvent["type"], payload?: any) => {};

// sendEvent("SIGN_OUT", {});
// sendEvent("LOG_IN", { userId: "101" });

// corrected code
//below here are reason out the second argument on the fly
const sendEvent = <Type extends TEvent["type"]>(
  ...args: Extract<TEvent, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => {};

sendEvent("LOG_IN", { userId: "101" });
sendEvent("SIGN_OUT");
