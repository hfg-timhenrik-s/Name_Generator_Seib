//TikTakToe

//Deklariation von Variablen

let playerOne = ""
let playerTwo = ""
let aktuellerSpieler

// document.getElementById("playerTurn").innerText=beginner()
// let playerOne = document.getElementById("PlayerOne").value
// let playerTwo = document.getElementById("PlayerTwo").value 

//Array anlegen mit dem Spielfeld

let field = [
    ["","",""],
    ["","",""],
    ["","",""]
]

//Zufällig Spieler auswählen, welcher beginnnt 

function beginner() {
    if(getRandomInt(2) >= 1) {
        aktuellerSpieler = playerOne
    } else {
        aktuellerSpieler = playerTwo
    }
    return aktuellerSpieler
}

//It´s your turn Feld mit Inhalt füllen

function confirm() {
    playerOne = document.getElementById("PlayerOne").value
    playerTwo = document.getElementById("PlayerTwo").value
    document.getElementById("playerTurn").innerText=beginner()
}

//abwechselnd Spieler (Player 1 oder Player 2)

function change() {
    if(aktuellerSpieler === playerOne) {
        aktuellerSpieler = playerTwo
    } else if(aktuellerSpieler === playerTwo){
        aktuellerSpieler = playerOne
    }
    document.getElementById("playerTurn").innerText=aktuellerSpieler
}

//Nur ein Zeichen Pro Feld

//Auf User Klick reagieren
//anklickbar machen

function clickPlayer(id) {
    document.getElementById(id).style.backgroundColor=colourChange()
    change()
}


//Bei neuem Spieler und nach klick bekommt man eine neue farbe

function colourChange() {
    if (aktuellerSpieler === playerOne) {
        return "#78CDD7"
    } else if (aktuellerSpieler === playerTwo) {
        return "#F7CACD"
    }
}

//Spielstand verstehen

// zufallszahl 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }