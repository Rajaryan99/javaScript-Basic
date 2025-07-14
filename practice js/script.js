//-------------------Assignment-1-----------------------

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] == num) {
//         arr.splice(i, 1);
//     }


// }
// console.log(arr)

//-------------------Assignment-2-----------------------

// let number = 28976543;
// let count = 0;

// let copy = number;
// while (copy > 0) {
//     count++;
//     copy = Math.floor(copy / 10);
// }
// console.log(count);

//-------------------Assignment-3-----------------------
// let num = 278159;

// let sum = 0;
// let copy = num;

// let digit = copy % 10
// copy = Math.floor(copy / 10);
// console.log(digit);
// console.log(copy);

// let num = prompt("enter the number to get factorial: ")
// let fact = 1;

// for (let i = 1; i <= num; i++) {

//     fact *= i;




// }
// console.log(fact);


//Object literals

// const student = {
//     name: "Raj aryan",
//     roll_no: 69,
//     mark: "A++",
//     location: "Bengalore",
//     fav_food: ['chawmin', 'pizzaa', 'biryani']
// };

// console.log(typeof (student));

// // twitter post

// const post = {
//     username: "@rajaryan99",
//     content: "This is my first post",
//     likes: '100k',
//     repost: 100,
//     tags: ['@sigma', '@openAi', '@claude']
// }


//Nested object(object of object)

// const classinfo = {
//     Arnav: {
//         grade: "A++",
//         gender: "male"
//     },
//     satish: {
//         grade: "A+++",
//         gender: "male",
//     },
//     misty: {
//         grade: "A++",
//         gender: "female"
//     }
// };

// const classinfo = [
//     {
//         name: "raj",
//         gen: "male",
//         place: "raipur"
//     },

//     {
//         name: "Nik",
//         gen: "male",
//         place: "bilaspur"
//     },

//     {
//         name: "vishal",
//         gen: "male",
//         place: "Gandhinagar"
//     }
// ];

//Math methods

// let num = Math.random();
// console.log(num);

// num = num * 10;
// num = Math.floor(num);
// let num = Math.floor(Math.random() * 100) + 1;
// console.log(num);

// let num = Math.floor(Math.random() * 5) + 1;
// console.log(num);

//Number guessing game

// const max = prompt("Enter the maximum number:")

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number: ");

// while (true) {
//     if (guess == "quit") {
//         console.log("user quit");
//         break;
//     }

//     if (guess == random) {
//         console.log("Congratulation! you Win!! Guessed right no.");
//         break;
//     } else if (guess > random) {
//         guess = prompt("hint: your guess was to big..");
//     } else {
//         guess = prompt("hint: your guess is too samll... ")
//     }





// }









