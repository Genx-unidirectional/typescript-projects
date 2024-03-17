// Awaited

//Partial

//Readonly

//Record

//Pick-->It's a utility type which pick takes object schema and takes specified types at second argument it can be unions and make new type for object schema from that
interface PickTest {
  intent: string;
  alcoholic: boolean;
  active: boolean;
}

type PickedShit = Pick<PickTest, "active" | "intent">;
//Omit

//Exclude

//Extract-->Extract is type which takes first union type as a argument and return a type conditional based on what we are giving look at the example below
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
type Shapes =
  | { kind: "circle"; radius: number }
  | { kind: "triangle"; x: number }
  | { kind: "square"; side: number };

type T2 = Extract<Shapes, { kind: "circle" }>;

//NonNullable

//Parameters

//ConstructorParameters

//ReturnType

//InstanceType

//ThisParameterType

//OmitThisParameter

//ThisType
