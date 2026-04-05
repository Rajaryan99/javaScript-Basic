const myKey = Symbol("key")


const user = {
    "username": "Raj",
    "Roll No": 69,
    [myKey]:"myKey1",
    location : "Mumbai",
    email: "rajaryan@google.com"

}

console.log(user.location)
console.log(user["username"])
console.log(typeof user[myKey])