interface Animal {
    readonly breed : string,
    name?: string,
    speak(): string, // we can define methods in interface unlike types
    getLifeSpan(breed: string): number
}

const streetDog: Animal = {
    breed: "local",
    name: "Raju",
    numberOfLegs: 4,
    speak: ()=>{
        return "bark"
    },
    getLifeSpan: (b: "local")=>{
        return 5
    }
}

// We can also add more properties later (reopening of interface)
interface Animal {
    numberOfLegs: number
}

// Inheritance

interface Puppy extends Animal{
    isVaccinated : boolean
}

const streetPuppy : Puppy = {
    breed: "local",
    name: "Golu",
    numberOfLegs: 4,
    speak: () => {
        return "bark"
    },
    getLifeSpan: (b:"local") => {
        return 7
    },
    isVaccinated: false
}