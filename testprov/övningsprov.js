// Hitta element

const rutaPromenad = document.querySelector(".promenad");
const rutaJogging = document.querySelector(".jogging");
const rutaStyrka = document.querySelector(".styrka");
const rutaTrappor = document.querySelector(".trappor");

const knapp = document.querySelector("button");

const pLista1 = document.querySelector(".lista1");
const pLista2 = document.querySelector(".lista2");
const pTyngsta = document.querySelector(".tyngsta");

// Global variabel
var pass = 30;

// Klickar på nkapp
knapp.addEventListener("click", function () {

    // visa i konsol
    console.log(rutaPromenad.value);
    console.log(rutaJogging.value);
    console.log(rutaStyrka.value);
    console.log(rutaTrappor.value);

    var promenad = Number(rutaPromenad.value)
    var jogging = Number(rutaJogging.value)
    var styrka = Number(rutaStyrka.value)
    var trappor = Number(rutaTrappor.value)

    // Skriv ut total tid
    pLista1.textContent = (promenad + jogging + styrka + trappor) * pass;

    // Skriv ut totala kalorier
    pLista2.textContent = promenad * 107 + jogging * 240 + styrka * 350 + trappor * 540;


})