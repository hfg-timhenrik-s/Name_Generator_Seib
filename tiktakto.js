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
    // Zellen Id mit Spielfeld verbinden
    if(id === "ZelleEins") {
        field[0][0] = aktuellerSpieler
    }
    else if(id === "ZelleZwei") {
        field[0][1] = aktuellerSpieler
    }
    else if(id === "ZelleDrei") {
        field[0][2] = aktuellerSpieler
    }
    else if(id === "ZelleVier") {
        field[1][0] = aktuellerSpieler
    }
    else if(id === "ZelleFünf") {
        field[1][1] = aktuellerSpieler
    }
    else if(id === "ZelleSechs") {
        field[1][2] = aktuellerSpieler
    }
    else if(id === "ZelleSieben") {
        field[2][0] = aktuellerSpieler
    }
    else if(id === "ZelleAcht") {
        field[2][1] = aktuellerSpieler
    }
    else if(id === "ZelleNeun") {
        field[2][2] = aktuellerSpieler
    }
    WinCheck();
    change();
    console.log(field);
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

//Gewinnbedingung

function WinCheck() {
    // schleife überprüft das Spielfeld
    for( let i = 0; i < 3 ;i++) {
        // horizontale Gewinnmöglichkeiten
        if(field[i][0] + field[i][1] + field[i][2] === playerOne + playerOne + playerOne || field[i][0] + field[i][1] + field[i][2] === playerTwo + playerTwo + playerTwo) {
            alert(field[i][0] + "won");
        }
        else if(field[0][i] + field[1][i] + field[2][i] === playerOne + playerOne + playerOne || field[0][i] + field[1][i] + field[2][i] === playerTwo + playerTwo + playerTwo) {
            alert(field[i][0] + "won"); 
        }
    } if(field[0][0] + field[1][1] + field[2][2] === playerOne + playerOne + playerOne || field[0][0] + field[1][1] + field[2][2] === playerTwo + playerTwo + playerTwo) {
        alert(field[0][0] + "won"); 
    } if(field[0][2] + field[1][1] + field[2][0] === playerOne + playerOne + playerOne || field[0][2] + field[1][1] + field[2][0] === playerTwo + playerTwo + playerTwo) {
        alert(field[0][2] + "won"); 
    }
}


// Zufallszahl 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }