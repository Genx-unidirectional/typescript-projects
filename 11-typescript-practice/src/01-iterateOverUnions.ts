//Q- Make the union and them iterate over it and remove one of that union

type Letters = "a" | "b" | "c";

//Here in below code what we are doing here is that we are checking the incoming type extends "c" which interns iterate over the union and check for the "c" it present it return never at its place
type Remover<TItem> = TItem extends "c" ? never : TItem;

type TypeWithoutC = Remover<Letters>;
