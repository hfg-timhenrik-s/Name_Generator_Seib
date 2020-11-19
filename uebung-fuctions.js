/* Schreibt eine Funktion, die euch aus einem mit Zahlen zwischen 1 und 100 gefüllten Array eine Zahl heraussucht.
Danach überprüft, ob die Zahl größer ist als 49.
Wenn ja, soll direkt die Zahl ausgegeben werden.
Wenn nicht, soll die Zahl gespeichert und dann eine neue Zahl aus dem Array gesucht werden.
Danach sollen beide Zahlen mit einer Erklärung ausgegeben werden, warum es zwei Zahlen sind.
Das ganze soll 10 Mal ausgeführt werden. */

let zahlen1 = []
let zahlen2 = []
let zahlen3 = []

let zahl1 = 0
let zahl2 = 0
let zahl3 = 0

//Array mit zufälliger Zahl bis 100

for (let i = 0; i < 100; i++) {
    zahlen1[i] = i 
}

for (let i = 0; i < 100; i++) {
    zahlen2[i] = i 
}

for (let i = 0; i < 100; i++) {
    zahlen3[i] = i 
}

//Function erstellen zum bekommen einer zufälligen zahl

zahl1 = zahlen1[getRandomInt(zahlen1.length)]
zahl2 = zahlen2[getRandomInt(zahlen2.length)]
zahl3 = zahlen3[getRandomInt(zahlen3.length)]

// zahl größer 50?

if(zahl1 > 50) {
    console.log(zahl1)
} else {
    zahl1 = zahl1 * 2
    console.log("Die Zahl war größer 50 und wurde mit 2 multipliziert = "zahl1)
}

if(zahl2 > 50) {
    console.log(zahl2)
} else {
    zahl2 = zahl2 * 2
    console.log("Die Zahl war größer 50 und wurde mit 2 multipliziert = " + zahl2)
}

if(zahl3 > 50) {
    console.log(zahl3)
} else {
    zahl3 = zahl3 * 2
    console.log("Die Zahl war größer 50 und wurde mit 2 multipliziert = " + zahl3)
}
 
//Function die ein array mit den zahlen von 1 bis 100 füllt, generieren

function getNumber(max) {
    let pick = number[getRandomInt(number.length)]
    return pick
}

function fillArray(max) {
    let array = []
    for (let i = 0; i < max; i++) {
        array[i] = i 
    }
    return array
}

console.log(getNumber) 

//getRandomInt function einsetzten

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max));
}