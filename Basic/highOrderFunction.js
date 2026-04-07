// High Order function

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting = "Hello Wolrd!"
for(const greet of greeting){
    if(greet == " ") continue;
    console.log(`Each char is ${greet}`)
}