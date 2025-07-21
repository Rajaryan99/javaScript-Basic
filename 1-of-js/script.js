let movei = prompt("Enter you fav movie: ");
let guess = prompt("Guess my fav Movei: ");

while ((guess != movei) && (guess != "quit")) {
    guess = prompt("Wrong guess. Please try again");
}

if (guess === movei) {
    console.log("congrats!!!");
} else {
    console.log("you quit")
}
