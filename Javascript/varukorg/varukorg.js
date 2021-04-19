// Välja elementen som vi behöver
const rutaPris = document.querySelector(".pris");
const rutaAntal = document.querySelector("input");
const rutaSumma = document.querySelector(".summa");


// Globala variabler
var antal = rutaAntal.value;
var pris = rutaPris.textContent;
console.log("pris". pris);


var summa = antal * pris;
console.log("summa", summa);


rutaSumma.textContent = summa;