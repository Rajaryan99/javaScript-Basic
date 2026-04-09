// Methods like Filter, reduce and map 

const coding  = ['js', 'ruby', 'java', 'python', 'cpp']


// const value = coding.forEach((i) => {
//     // console.log(i)
//     return i
// })

// console.log(value)


const nums = [1, 2, 3, 4, 5, 6];


const newNum = nums.filter((num) => (
     num > 4
    // return greateThen4
    
))

// console.log(newNums)

const books = [
    {
        title: 'Book seven', genre: "History", publish: 1986
    },
    {
        title: 'Book eight', genre: "Python", publish: 1999
    },
    {
        title: 'Book nine', genre: "history", publish: 2001
    },
    {
        title: 'Book ten', genre: "marvel-comic", publish: 2012
    },
]


let userBooks = books.filter((bk) => bk.genre.toLowerCase() === "history"

)
userBooks = books.filter((bk) => bk.publish > 2000 &&   bk.genre.toLowerCase() === "history" )


// console.log(userBooks)


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNums = myNums.filter((num) => num > 5)
// console.log(myNums)
console.log(filterNums)
console.log(myNums)


console.log("----------------------------------------------------------------------------")

let newNums = myNums.map((num) => num + 10)

console.log(newNums)
console.log(myNums)





