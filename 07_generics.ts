function getFirstElement(a: (number | string)[]){
    return a[0];
}

const numbers = [1,2,3]
const strings = ["sdf","fds","dfs"]

const firstNum = getFirstElement(numbers) // type is string | number
const firstString = getFirstElement(strings) // type is string | number

// In the above example we are trying to get the first element of given array. If we want it to work on say an array of booleans then we have to update our function to include booleans as well.

// Even then the return type will be number, string or boolean but it will not be strictly number when passing numbers array or boolean when passing an array of boolean Hence the need of generics

function giveFirstElement<ElementType>(a: ElementType[]){
    return a[0]
}

// Now ts will automatically assign the input type as return type
const firstNumber = giveFirstElement(numbers) // type is number
const firstStr = giveFirstElement(strings) // type is string

// Or we can explicitly define the generic type

const booleanArr = [true, false , false , true];

const firstBoolean = giveFirstElement<boolean>(booleanArr);

// Example

type ApiResponse<Data> = {
    data: Data
    isError: boolean
}

const response : ApiResponse<{url: string, status: number}> = {
    data : {
        url: "https://omkaushik.com",
        status: 200
    },
    isError : false
}

// Or

type BlogResponse = ApiResponse<{title: string}>

const responseBlog: BlogResponse = {
    data : {
        title : "Welcome to my site"
    },
    isError: false
}

// We can also give a default type

type myApiResponse <Data = {status: number}> = {
    data: Data
    isError: boolean
}

const myResponse : myApiResponse = {
    data : {
        status : 201
    },
     isError : false
} 

// We can make generic types even more strict

type StrictApiResponse <Data extends object = {status: number}> = {
    data : Data
    isError : boolean
}
// Now we cannot using 'string' type for data
// const strictResponse: StrictApiResponse<string> = {
//     data: "hellow",
//     isError: false
// }
const strictResponse : StrictApiResponse = {
    data : {
        status : 300
    },
     isError : false
}

// Using generics with arrow functions

const getFirstProduct = <T>(products: T[]): T => {
    return products[0]
}
// T[] and Array<T> can be used interchangeably

interface Database {
    connection : string,
    username: string,
    password : string
}

function anotherFunction <T, U extends Database>(a: T, b: U): object{
    return {
        a, b
    }
}
// The second arguement must be of type Databse, since we are extending it we can also use extra properties
anotherFunction(3, {connection: "https//dbconnectionstring", username:"omkausihk",password:"12345", expiresIn: '5d'})