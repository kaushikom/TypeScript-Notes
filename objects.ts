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