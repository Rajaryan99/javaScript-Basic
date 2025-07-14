// creating a dice roll

// const dice_roll = Math.floor(Math.random() * 6) + 1;
// console.log("The Dice_number is: ", dice_roll);

// car Object

let color = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "greenyellow"];

let button = document.getElementById('btn');
let bg = document.body;



button.onclick = () => {
    let randomColor = Math.floor(Math.random() * color.length);
    bg.style.backgroundColor = color[randomColor];
}