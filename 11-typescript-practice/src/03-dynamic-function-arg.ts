type TEvent =
  | { type: "LOG_IN"; payload: { userId: string } }
  | { type: "SIGN_OUT" };

const sendEvent = (eventType: TEvent["type"], payLoad?: any) => {};

sendEvent("LOG_IN", {});
sendEvent("SIGN_OUT", { userId: "101" });
