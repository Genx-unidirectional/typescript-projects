### Refining the typescript and what is purpose , WHY? we use the typescript let's find out !

# Instead of any we can use unknown for inferring the upcoming dynamic type

# There are different efficient ways to define schema for specific data type or any programming entities but doing that we actually need to write code to find out the way to do that

# Narrowing (01-narrowing.ts ):

-->Mantra for narrowing : if check | type guard(i.e using typeof in if) | falsy checks | using in operator | using instanceOf | using predicate | using assertion function | discriminated unions

-->If we want to make a type which is superset of preceding two types ,we can make it's parameters optional so that even after narrowing down it will appear again ( line no :59)

-->We know that in js in if statement the falsy values are coerced into boolean and then they decide code inside the if statement is going to be executed or not

-->In TypeScript, the behavior we are (Line no :91) observing is due to how TypeScript infers the types based on the assignment and usage of the variables.

-->"CFA" :Control Flow Analysis (line no :95)

-->Type Predicates: Setting self defined types and using conditions using type structure to return types is defined type (line no : 121).

-->Basically using assertion function and predicate we can do the two things first we can return true or false if type matches and also assign the narrowed type to that variable.

-->Whenever we see the types union having one property same we have to use discriminated union types there to narrow down them and we also use switch statements in there which is useful.

-->Exhaustive check: when no union type is left after returning we return never.

# Functions (02-functions.ts)

-->Mantra using types in function :making function signatures | construct signatures | generics | extended generics | optional parameter in function for overloads | rest parameters | making function argument as tuple | giving type to object argument while destructuring

-->Optional logic in interface :We can make two function signatures in one interface one is callable and another is constructor both have (str:string) as an argument but one of them is optional i.e (str? :string) when we do this we can make the interface which either function or a constructor based on that optional value

-->Using generics in function: If don't know what parameter coming inside the function instead of type any we use generic which creates link between input and output generic hold the input type which can be use late in the function.

-->Making optional parameters in function unnecessary will cause later undefined problem in function body.

--> If we make void return type function but we return something from that function then we assign that function to a variable that variable takes void type not a a return type of that function

# Objects (03-objects.ts)

-->Mantra for object: interface or type schema| readonly or optional props |
index signatures | Excess property checking if there are optional fields | Extending types |Intersection types | Generics in objects

-->When its comes to optional fields in interfaces we perform excess property checks i.e if optional props having object pass in function we check its props and return alternate value for that props if they are undefined

# Array (04-array.ts)

-->Mantra for array:use generics | use as const for making tuple |making readonly array | making readonly tuple

-->We can make array readonly but we cannot assign them to normal array

-->We can make the tuple and assign another similar non tuple to it

-->Why there is need of making readonly?

-->Difference between tuple and readonly array:
for tuple :We can assign other array which compliant of that tuple type

for readonly array: we cannot assign another array which has exact same type of that readonly array because that array pointing the address and the readonly pointing the address will be same that never going to be happen because when we assign normal array to readonly array we are mutating the values of that readonly array by assigning to normal array

# Utility

# Classes

-> we have to explicitly call the base class method with super keyword of if the

->We can put more specified type to the base class fields which are initialized in the base class we use declare keyword for the field which we are going to give more detailed type in the derived class
->Protected fields cannot be accessed via derived class instance
