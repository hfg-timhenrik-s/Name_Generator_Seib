//Zufallsfunktion einsetzen

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max)); 
    console.log(flex)
    return flex
}


// Einen Verkettung von verschiedenen arrays mit deutschen Wörtern (Artikel – Adjektiv – Substantiv) erstellen 

let Artikel = ["der ", "die "]

let Adjektiv = ["süß","schlau","nett","bös","dick","dumm","eklig","erotisch","gemein"]

let Substantiv = ["Pornodarsteller","Bürgermeister","Junge","Räuber","Rabauke","Gemeinling","Schurke","Bösewicht","Prinzessin"]

let SubstantivPlural = ["Pornodarsteller","Bürgermeister","Jungen","Räuber","Rabauken","Gemeinlinge","Schurkem","Bösewichte","Prinzessinen"]

//console.log erstellen

//Zufälle erstellen

const art = Artikel [getRandomInt(2)]

let adj = Adjektiv [getRandomInt(9)]

//Adjektive angleichen

if (art === "der ") {adj = adj + "e"  
console.log (art + adj + " " + Substantiv[getRandomInt(9)]) 
}

if (art === "die ") {adj = adj + "en" 
console.log (art+ adj + " " + SubstantivPlural[getRandomInt(9)])
}


