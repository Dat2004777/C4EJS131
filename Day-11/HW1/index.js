let btn = document.querySelector("button");
btn.addEventListener("click", changeColor);
function changeColor() {
    let background = document.querySelector(".container");
    let arrayColor = ["red", "blue", "green", "gray", "yellow", "black"];
    background.style.backgroundColor = arrayColor[randomColor(arrayColor)]; 
}

function randomColor(array) {
    return Math.floor(Math.random()*array.length); 
}