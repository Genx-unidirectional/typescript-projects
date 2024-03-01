### Refining the typescript and what is purpose , WHY? we use the typescript let's find out !

# Instead of any we can use unknown for inferring the upcoming dynamic type

# There are different efficient ways to define schema for specific data type or any programming entities but doing that we actually need to write code to find out the way to do that

# Narrowing (01-narrowing.ts ):

-->Mantra for narrowing : if check | type guard(i.e using typeof in if) | falsy checks | using in operator | using instanceOf | using predicate | using assertion function | discriminated unions

-->If we want to make a type which is superset of preceding two types we can it's parameters optional so that event after narrowing down it will appear again ( line no :59)

-->We know that in js in if statement the falsy values are coerced into boolean and then they decide code inside the if statement is going to be executed or not

-->In typescript because strict mode is on we can use == , != in if statement also === ,!== both work same but in js != , == only check the value

-->In TypeScript, the behavior we are (Line no :91) observing is due to how TypeScript infers the types based on the assignment and usage of the variables.

-->"CFA" :Control Flow Analysis (line no :95)

-->Type Predicates: Setting self defined types and using conditions using type structure to return types is defined type (line no : 121).

-->Basically using assertion function and predicate we can do the two things first we can return true or false if type matches and also assign the narrowed type to that variable.

-->Whenever we see the types union having one property same we have to use discriminated union types there to narrow down them and we also use switch statements in there which is useful.

-->Exhaustive check: when no union type is left after returning we return never.
