const  colors = ["green", "blue", "red", "grey"]; 
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
     // we want to pull from the array a random color from 0 to 3
     const  randomNumber = getrandomNumber();
     console.log(randomNumber)
     document.body.style.backgroundColor = colors[randomNumber];
     color.textContent =   colors[randomNumber];    
    });

function getrandomNumber() {
    return Math.floor(Math.random() * colors.length);
}