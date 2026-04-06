function calclulateCartPrice(...num1) {  //Rest operator ...
    return num1
}

console.log(calclulateCartPrice(2, 4, 5))


const user = {
    username: "Raj",
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)


function handleObject(anyobject) {
    console.log(`Username is ${user.username} and price is ${user.price}`)
}

handleObject(user)