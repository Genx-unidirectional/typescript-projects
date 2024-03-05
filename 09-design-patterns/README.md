### Design patterns.

# Null-Object-Pattern

Assume we have data , info , users which are array of objects , then we perform the function or any operation using those objects but what when that object is null we perform null checks so rather than performing lot's null checks we make similar special null object which behave in a neutral way

In 01nullObjectPattern.ts we can clearly see that we can creative null object and which makes our code cleaner also not error prone and without bugs.

# Builder Pattern

Let's say we have class which creates object which is quite complex have lot's of method and properties init but lot's of properties in that class are optional so how here comes the builder pattern
Builder is class which construct the object using the builder class
It has function which step by step construct the object attributes
Simply the builder class over the abstract class which where abstract class initializes the object and builder construct the object using it's function

Approach:Making base class with requirement and fulfilled or build them using the builder class
