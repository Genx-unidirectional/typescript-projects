// consider following example

type Size = "sm" | "xl";

interface FuncProps {
  fabricSize: Size;
}

// in below example we use size to console.log how much item is big

function Markup(item: FuncProps) {
  if (item.fabricSize == "sm") {
    console.log("item is small");
  } else {
    console.log("item is large");
  }
}

// type OmitString<Type extends string> = Type | Omit<string, Type>;

// another function

function Test(item: Size) {
  if (item == "sm") {
    console.log("item is small");
  } else {
    console.log("item is big");
  }
}

// instead of size we have following type

// this below typ causes loose autocomplete because typescript always return single element in union while type autocomplete when that union it repeating in below code we have string as third union type which act as a repeated type for xl and sm as typescript consider it as same and while making autocomplete when we are using it, it gives string type only
// type Size2 = "sm" | "xl" | string;
// solution
// type Size2 = "sm" | "xl" | Omit<string, "xl" | "sm">;
// using the typehelper
type LooseAutocomplete<T extends string> = T | Omit<string, T>;
type Size2 = LooseAutocomplete<"sm" | "xl">;
function Test2(item: Size2) {
  if (item == "sm") {
    //here we loose our our intellisense
    console.log("item is small");
  } else {
    console.log("item is big");
  }
}
