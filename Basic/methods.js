// Methods like Filter, reduce and map 

const coding  = ['js', 'ruby', 'java', 'python', 'cpp']


// const value = coding.forEach((i) => {
//     // console.log(i)
//     return i
// })

// console.log(value)


const nums = [1, 2, 3, 4, 5, 6];


const newNums = nums.filter((num) => (
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
userBooks = books.filter((bk) => bk.publish > 2000 )


console.log(userBooks)


