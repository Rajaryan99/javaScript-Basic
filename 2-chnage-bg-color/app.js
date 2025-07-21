

let color = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "greenyellow"];

let button = document.getElementById('btn');
let bg = document.body;



button.onclick = () => {
    let randomColor = Math.floor(Math.random() * color.length);
    bg.style.backgroundColor = color[randomColor];
}