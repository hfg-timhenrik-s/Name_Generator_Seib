let zahlen1 = []
let zahlen2 = []
let zahlen3 = []

let zahl1 = 0
let zahl2 = 0
let zahl3 = 0

//Array mit zufälliger Zahl bis 100

zahlen1 = fillArray(100)
zahlen2 = fillArray(100)
zahlen3 = fillArray(100)

//Function erstellen zum bekommen einer zufälligen zahl

zahl1 = zahlen1[getRandomInt(zahlen1.length)]
zahl2 = zahlen2[getRandomInt(zahlen2.length)]
zahl3 = zahlen3[getRandomInt(zahlen3.length)]
console.log(zahlen1)

// zahl größer 50?
let checkZahl1
checkZahl1 = checkNumber(zahl1, 50, 2)
console.log(checkZahl1)

let checkZahl2
checkZahl2 = checkNumber(zahl2, 50, 3)
console.log(checkZahl2)

let checkZahl3
checkZahl3 = checkNumber(zahl3, 50, 4)
console.log(checkZahl3)

//Functions unten hinschreiben
//Function die ein array mit den zahlen von 1 bis 100 füllt, generieren

function fillArray(max) {
    let array = []
    for (let i = 0; i < max; i++) {
        array[i] = i 
    }
    return array
}

//Function, die erkennt ob eine zahl größer 50 ist

function checkNumber(givenNb, compNb, add) {
    if(givenNb > compNb) {
        return givenNb
    } else {
        givenNb = givenNb * add
        return "Die Zahl war größer 50 und wurde mit 2 multipliziert = " + givenNb 
    }
}

//getRandomInt function einsetzten

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max));
}