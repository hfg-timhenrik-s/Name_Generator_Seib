// Array mit dem Alphabet

const groß = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"]

const klein = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"]

const sign = ["!", "§","$","%","&","/",";","=","*","#"]

//getRandomInt function einsetzten

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max));
    return flex
}

//let function einsetzen um arrays zufällig auszuwählen

let eins = groß[getRandomInt(groß.length)]

let zwei = klein[getRandomInt(klein.length)]

let drei = sign[getRandomInt(sign.length)]

let number = getRandomInt(1000)

//Schleife einsetzen um 10 Passwörter nacheinander zubekommen

for (let i = 1; i < 11; i++) {
    eins = groß[getRandomInt(groß.length)]
    zwei = klein[getRandomInt(klein.length)]
    drei = sign[getRandomInt(sign.length)]
    number = getRandomInt(1000)
    console.log(eins+zwei+drei+number)
}
