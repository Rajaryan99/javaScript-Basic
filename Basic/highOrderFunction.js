// High Order function

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello Wolrd!"
for(const greet of greeting){
    if(greet == " ") continue;
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "united states")
map.set('EU', "Europe")

// console.log(map)

for(const [key, value] of map){
    // console.log(`short is ${key} and full name is ${value}`)
}


const obj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift as app"
}


for (const key in obj) {
   console.log(`${key} shortcut is for ${obj[key]}`)
    
    
}

