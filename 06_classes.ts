class User {
    email : string
    // private keyword marks a property as private and can only be accessed within the class.
    // Any property which is not using private keyword or using 'public' is public
    private  name : string
    readonly city : string = "Delhi"
    constructor (email : string, name : string){
        this.email = email
        this.name = name
    }
    printName (){
        console.log(this.name)
    }
}

const om = new User("om@kaushik.com", "Om Kaushik");
// om.printName();

// Typescript shorthand for creating a class, initialize it with a constructor and make it accessible with a specific visibility modifier
class Admin {
    readonly password : string = "12345"
    constructor (
        public username: string, // Creates public property named username
        public email: string // Creates public property named email
    ) {}
}

const Om = new Admin("omkaushik", "admin@kaushik.com")

// console.log(Om);


// Getters and setters

class Car {
    private _model: string
    constructor (
        model : string,
        public color : string,
        private owner : string
    ){}
    // Accessed like a property
    get Model():string{
        return this._model
    }
    // Accessed like a method
    returnModel():string{
        return this._model
    }
    // A 'set' accessor cannot have a return type annotation.ts(1095)
    set Model(m: string){
        this._model = m
    }
}

const civic = new Car("2024","white", "Joe");

// Accessing a getter
civic.Model

// Accessing a regulat method
civic.returnModel()

// Using a setter
// Wrong civi.Model("2023") as it is used like a propery instead
civic.Model = "2023"

// Use protected if you want some property to be accessed from a child class
class Animal {
    constructor(
        protected type: string
    ){}
}

class Bear extends Animal{
    readonly type = "White Bear"
}

// Abstract classes

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    // You can declare an abstract method whoose implementation will be defined in the child classes
    abstract getSepia(): void

    // We can also define non abstract methods
    getReelTime():number{
        return 10
    }
}

// Cannot create an instance of an abstract class.ts(2511)
// const app = new TakePhoto("test", "test")

class Instagram extends TakePhoto{

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        // Constructors for derived classes must contain a 'super' call.ts(2377)
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}
// Only the instances of classes extending the abstract class can be created
const app = new Instagram("test", "test", 3);

// We can access the non abstract method as well
app.getReelTime();