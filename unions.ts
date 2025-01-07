let score: number | string = 10;

score = 11;
score = "12"

// When giving more than one type, ts only allows common operations between the two types for others it needs a check for each type. 

function doSomething(n: number | string){
    n.toLowerCase() // not allowed
}

// Allowed 
function doSomethingElse(n:number | string){
    if(typeof n === "string"){
        // In this block of code n is string
        n.toLowerCase();
    }
    else if(typeof n === "number"){
        // In this block of code n is a number
        n.toFixed();
    }
}

// Array
const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"];
// Either all the numbers or all the strings. Mixed not allowed
const data3: string[] | number[] = [1,"2","3"] // not alllowed
const data4: string[] | number[] = [1,2,3] // only one type at a time allowed
// Both numbers and strings allowed mixed with each other
const data5: (string | number)[] = ["1",2,"3"] // allowed