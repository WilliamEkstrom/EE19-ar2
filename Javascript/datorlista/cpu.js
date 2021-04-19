// Hitta element vi behöver
const rutaNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

// Vad händer när man klickar på knappen
knapp.addEventListener("click", function () {
    console.log(Du har klickat på knappen!);

    // läs av textrutan och lagra i en variabel
    var namn = rutaNamn.value;
    consolge.log(namn);

    // Läs in valet i meny
    var cpu = meny.value;
    consolge.log(cpu); 
});

