// Reduce in javascript

const myNums = [1, 2, 3]

const initialValue = 0;

const mYTotel = myNums.reduce( (acc, cuuVal) => {
    console.log(`Acc: ${acc}`)
    return acc + cuuVal
}, initialValue)

console.log(mYTotel)