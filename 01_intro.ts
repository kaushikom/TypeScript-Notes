// Explict defining of types
let greetings: string = "Hello";
let result: boolean;

// Type inference
let message = "How are you today?";  // now message will be automatically given string type

// Any
let futureVariable; // it will be assigned the type of 'any'

// Value can be assigned as type
let pi:3.14
pi = 4 // not allowed
let truthOrDare:true = true
truthOrDare = false // not allowed

let pet: "dog" | "cat" | "bird"
pet = "cat"
pet = "pig" // not allowed

// Define the type of arg
function addTwo(num: number){
    // num.toUpperCase(); these things will then be not allowed because of typechecking
    return num+2;
}

// Define the type of return
function lieDetector(answer: string): boolean{
    return true;
}

const getHello = (name:string):string => {
    return `Hello ${name}`
}

const heros = ["thor","superman","ironman"]
heros.map((hero):string=>{ // here string is setting the type of output
    return "Hero name: "+hero;
    // return 1; not allowed
})
// Explicitly set void for functions that don't need to return anything
function consoleError(errMessage: string): void{
    console.log(errMessage);
}
// the above function may give undefined if tried to access return value

/* 
Never: Represents a function or value that never successfully completes or returns. 
Use Case: Used for functions that throw an error or have infinite loops and thus never return a value.
*/

function throwError(message: string): never {
    throw new Error(message);
}
