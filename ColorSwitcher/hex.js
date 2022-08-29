// a different way of creating a random colors but this one is not fixed on a specific number of calors
//using loop .

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener("click", function(){
    let hexcolor = "#";
      for (let i=0 ; i < 6 ; i++){
        hexcolor += hex[getrandomNumber()]
      }
      color.textContent = hexcolor;
      document.body.style.backgroundColor = hexcolor;
})
function getrandomNumber(){
    return Math.floor(Math.random() * hex.length);
}