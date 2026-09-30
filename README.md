==========================================================================================================================
1. What was the biggest advantage you noticed when using TypeScript vs. plain JavaScript?

The biggest advantage is type checking. TypeScript helps me find errors while I am writing the code instead of finding them only when the program runs
==========================================================================================================================
2. Describe a specific error TypeScript caught that JavaScript would have missed.

The part where its supposed to be numbers instead of string

example:

age: "twenty"

The 'age' must be in numbers but instead in input the string "twenty" instead

==========================================================================================================================

3. What is the difference between an interface and a type alias in TypeScript? When would you use each?

An interface describes the structure of an object. A type alias can describe an object, but it can also describe unions, primitives, and other types.

==========================================================================================================================
4. Why do we use `export` and `import` in TypeScript files?

Export- Transferring your goods to another location
Import- The Transferred goods you want for own use

Export is the ready-to-use data for import to extract

==========================================================================================================================
5. What happens to interfaces when TypeScript compiles to JavaScript? Why?

Interfaces are removed when TypeScript is compiled to JavaScript.

This is because interfaces are only used by TypeScript for type checking during development. JavaScript does not need them when the program runs.


==========================================================================================================================
6. If you had to add a `Review` entity (users reviewing products), what would its interface look like? Write it out.


export interface User {
    name: string;
    id: number;
    email: string;
    age?: number;
    createdAt: Date;
    isActive: boolean;
}

For me name is the primary interface because its the identity mostly used in all scenarios, second goes to ID and email as it's linked to the name and the rest are filled below.
==========================================================================================================================
