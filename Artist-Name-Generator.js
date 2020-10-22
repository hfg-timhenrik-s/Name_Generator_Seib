// Einen Verkettung von verschiedenen arrays (Artikel – Adjektiv – Substantiv) erstellen 

let Artikel = "the " 

let Adjektiv = ["great ","strong ","angry ","unbelievable ","crazy ","yummy ","funny ","sexy ","erotic "]

let Substantiv = ["Pornstar","Horse","President","Artist","Snake","Panda","Hero","Trashcan","Underwear"]

//function einsetzen

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log (Artikel + Adjektiv[getRandomInt(8)] + Substantiv[getRandomInt(8)] );

