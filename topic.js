//  Array mit jeweils 10 Wörtern und 5 von der selben Sorte anlegen.

const word =["cake","cookie","Wine","sussage","toilettpaper","newspaper","teacup","beer","knife","coffeemachine"]

//getRandomInt function einsetzten

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max));
    return flex
}

//let function einsetzen um wörter der selben art auszuwählen

const food = ["cake","cookie","Wine","sussage","beer"]

let Wort = word[getRandomInt(10)]

//If abfrage erstellen + Schleife

for (let i = 0; i < 10; i++) {
    Wort = word[getRandomInt(10)]
    if (food.includes(Wort)){
        console.log( Wort + " is nice food!")
    } 
    else {
        console.log(Wort + ": You can´t eat it!")
    }
}