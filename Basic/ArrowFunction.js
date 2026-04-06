// -----------------Arrow Functions----------------------

const user = {
    username: "Raj Aryan",
    price: 777,

    welcomeMessage: function(){ // this reffers to current context.
        console.log(`Hello ${this.username}, welcome to our website` )
        console.log(this);
        
    }

}
// user.username = "sakshi"
// user.welcomeMessage()

// console.log(this)


function coffee(){
    console.log(this)
}
// coffee()


const chai = () => {
    console.log(this)
}

chai()