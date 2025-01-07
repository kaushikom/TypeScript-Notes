let myArr: [number, string, boolean];

myArr = [1,"hello", false] // allowed
myArr = ["hello", 1, false] // not allowed
myArr = [1, "hello", false, 3] // not allowed

type User = [number, string]

const newUser: User = [112, "someone@example.com"]

// Unexpected behaviour

// 1. Values can be changed later
newUser[1] = "string"

// 2. Array methods may violate the type
newUser.pop()
