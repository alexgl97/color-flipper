// //Create an array with all the values from thehex codes


const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.getElementsByTagName('body');

btn.addEventListener('click', getRandom);

function getRandom() {
    let hexColor = '#';

    for(i = 0; i<6; i++) {
        hexColor += colors[randomNumber()];

        color.textContent = hexColor;

        document.body.style.backgroundColor = hexColor;
    }


};
function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}



//     // const value = Math.random()  * colors.length;
//     // document.body.style.backgroundColor = hexCol + colors[value];
//     // color.textContent = hexCol + colors[value];
//     // console.log(value);

// //When a button is clicked change the background color of the body 
// //get a random number all the time through a function 
// //display that number onto the html element


// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }
//   // console.log(hexColor);

//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }