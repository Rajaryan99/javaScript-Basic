// -----------------Arrow Functions----------------------

const user = {
    username: "Raj Aryan",
    price: 777,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}, welcome to our website` )
    }

}

console.log(user.welcomeMessage())
