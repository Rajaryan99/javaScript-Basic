// Array


const myArrry = [1,2,3,4]
console.log(myArrry[3])

// myArrry.push(4)
// console.log(myArrry)
// // myArrry.pop()
// // console.log(myArrry)

// const newArr = myArrry.join()

// console.log(myArrry)
// console.log( typeof newArr)


//slice and Splice

const arr  =  [0,1,2,3,4]
console.log("A", arr)

const newArr  = arr.slice(1, 3) //original array does not chnage
console.log(newArr);
console.log("B", arr)


const newArr1 = arr.splice(1,3) // orifian array chnage
console.log(newArr1)
console.log("c", arr)



