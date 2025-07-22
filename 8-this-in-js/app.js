let btn = document.querySelector('button');
let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');

function chnageColor() {
    console.log(this.innerTetx);
    this.style.backgroundColor = 'pink';
}

btn.addEventListener('click', chnageColor);
p.addEventListener('click', chnageColor);
h1.addEventListener('click', chnageColor);
h3.addEventListener('click', chnageColor);