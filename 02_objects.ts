const user = {
    name : "Om Kaushik",
    email : "om@kaushik.com",
    isActive : true
}
// Set the type of object in arg
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

// Set the type of return object
function returnEmpty():{}{
    return {}
}

function returnUser():{name:string,email:string,isActive:boolean}{
    
    // Logic here

    return {
        name: "Om Kaushik",
        email: "kaushik@om.com",
        isActive: false
    }
}

// Unexpected behaviour
function isJohnDead({ answer, reason }: { answer: boolean; reason: string }): boolean {
    return !answer;
}

const fact = {answer:true, reason:'We saw his grave', dog:'alive'}

// Not allowed
// isJohnDead({answer:true, reason:'We saw his grave', dog:'alive'})

// Allowed
isJohnDead(fact)


// Type aliases

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function checkUser(user: User){}

// Allowed
checkUser(user)

const anotherUser = {
    name: "John Wick",
    isActive: false
}

// Not allowed
// checkUser(anotherUser)
// Hence we can use the type aliases to fix the problem with object types

// This type can be used for any new user objects

const newUser: User = {
    name:"Winston",
    email:"winston@continental.com",
    isActive:true
}

// Readonly and optional
type Dog = {
    name : string,
    readonly breed : string,
    hasOwner?: boolean // '?' marks the property as optional
}

const dogNextDoor: Dog = {
    name : "Santa",
    breed: 'husky',
    hasOwner: true
}

// Allowed
dogNextDoor.name = 'Popeye'

// Not allowed
// dogNextDoor.breed = 'husky'

// Using two or more types in one

type cardNumber = {
    cardNumber : number
}

type cardDate = {
    expiryDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

const myCard: cardDetails = {
    cardNumber: 1234,
    expiryDate: "Jan 2025",
    cvv: 321
}