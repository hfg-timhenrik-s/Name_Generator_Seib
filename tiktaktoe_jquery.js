// Punktestand der Spieler
let pointsname1 = 0;
let pointsname2 = 0;

// Variablen für UI festlegen
let size = ""
let id = ""
let fieldArray = []

//Spielfeldgröße aus HTML-Input Field abrufen
let fieldX = $("#fieldX").val()
//Spielfeldgröße aus HTML-Input Field bei jedem neuen klick abrufen
$("#fieldX").on("input", function () {
    fieldX = $("#fieldX").val();
    resetArray();
    sizeOfField();
})


//Funktion zum erstellen eines Spielfelds
function sizeOfField() {
    $("tr").remove()
    //(Wert wird vom fieldX Input feld genommen)
    size = fieldX;
    console.log(size)

    for (let i = 0; i < size; i++) {

        //create Array in Array für jede Zeile
        fieldArray.push([]);
        // für jeder Tabellenzeile Id-Namen erstellen
        id = "Zeile" + i
        //Reihe in die Tabelle einfügen + ID
        $("table").append("<tr id=" + id + "> </tr>")
        //In jeder Reihe Felder einfügen 
        for (let t = 0; t < size; t++) {
            //create Array für jedes Feld
            fieldArray[i].push("");
            //td in jede Zellen ID einfügen + jeweilige Zellen ID bennen
            $("#" + id).append("<td id=Zelle" + i + t + "></td>");
            $("#" + "Zelle" + i + t).on("click", function () { clickPlayer("Zelle" + i + t) });
        }
    } console.log(fieldArray)
}

//Deklariation von Variablen (Spieler)
let playerOne = "Hans"
let playerTwo = "Peter"
let aktuellerSpieler

//Zufällig Spieler auswählen, welcher beginnnt
//js ignoriert weil onclick in html 
//jshint ignore:start
function beginner() {
    if (getRandomInt(2) >= 1) {
        aktuellerSpieler = playerOne
    } else {
        aktuellerSpieler = playerTwo
    }
    return aktuellerSpieler
}
//jshint ignore:end

//It´s your turn Feld mit Inhalt füllen wird wird von js ignoriert weil onclick in html 
//jshint ignore:start
function confirm() {
    //Spielernamen aus HTML-Inputfield nehmen
    playerOne = document.getElementById("PlayerOne").value
    playerTwo = document.getElementById("PlayerTwo").value
    // Spielernamen ins Html-Span playerTurn einfügen
    document.getElementById("playerTurn").innerText = beginner()
}
//jshint ignore:end

//abwechselnd Spieler an die Reihe kommen lassen (Player 1 oder Player 2)
function change() {
    if (aktuellerSpieler === playerOne) {
        aktuellerSpieler = playerTwo
    } else if (aktuellerSpieler === playerTwo) {
        aktuellerSpieler = playerOne
    } // Spielernamen ins Span playerTurn einfügen
    document.getElementById("playerTurn").innerText = aktuellerSpieler
}

//Auf User Klick reagieren sodass Felder anklickbar werden und daraufhin mit Farbe gefüllt werden
//Es darf nur ein Zeichen Pro Feld
function clickPlayer(id) {
    // wenn diese Farbe (leeres Feld) im CSS ist, kann man durch Klick Farbe ändern
    if ($("#" + id).css("background-color") === "rgb(204, 197, 185)") {
        $("#" + id).css("background-color", colourChange());
        // Angeklickte Zelle finden und im Array mit dem playernamen füllen
        id = id.replace("Zelle", "")
        let zeile = id[0];
        let reihe = id[1];
        fieldArray[zeile][reihe] = aktuellerSpieler;
        console.log(fieldArray)
        // Nach aktuellstem Stand im Array auf Gewinn überprüfen und anschließend Spieler wechseln
        WinCheck()
        checkUnentschieden()
        change()
    }
}

//Bei neuem Spieler und nach klick bekommt man eine neue farbe (wird in ClickPlayer aufgerufen)
function colourChange() {
    //PlayerOne hat Farbe Türkis
    if (aktuellerSpieler === playerOne) {
        return "#78CDD7"
    } //PlayerTwo hat Farbe Rosa 
    else if (aktuellerSpieler === playerTwo) {
        return "#F7CACD"
    }
}

//Gewinnbedingung erstellen (wie viele Zeilen muss ein Spieler nebeneinander besetzt haben für den sieg)
let pointsToWin = $("#rule").val();
//aktualisiert bei jedem neuen klick im HTML-Input Field und übergibt neuen Wert 
$("#rule").on("input", function () {
    pointsToWin = $("#rule").val();
})

//Gewiiner finder (Felder auf Gewinnbedingung prüfen)
function WinCheck() {
    // Deklariation von Variablen (Gewinnmöglichkeiten/Spielfeldgröße)
    let horizontal = "";
    let vertikal = "";
    // Gewinnbedingung (Wie oft muss der Spieler Name hinter einanderstehen /Spielername wird aneinadergereiht)
    let victoryOne = playerOne.repeat(pointsToWin)
    let victoryTwo = playerTwo.repeat(pointsToWin)
    //  Schleife für Spalten 
    for (let i = 0; i < size; i++) {
        horizontal = "";
        vertikal = "";
        //Jedes Feld in der Spalte testen
        for (let t = 0; t < size; t++) {
            // Inhalt des Arrays in string einsetzen
            horizontal += fieldArray[i][t]
            vertikal += fieldArray[t][i]
        }
        // die erstellten Strings auf die Gewinnbedingung kontrollieren
        if (horizontal.includes(victoryOne)) {
            pointsname1++
            score();
            sizeOfField();
        }
        else if (horizontal.includes(victoryTwo)) {
            pointsname2++
            score();
            sizeOfField();
        }
        if (vertikal.includes(victoryOne)) {
            pointsname1++
            score();
            sizeOfField();
        }
        else if (vertikal.includes(victoryTwo)) {
            pointsname2++
            score();
            sizeOfField();
        }
    }
    //Spielfeld auf Diagonale Gewinnmöglichkeiten testen
    WinCheckDiagonal()
}

function WinCheckDiagonal() {
    // Deklariation von Variablen (Gewinnmöglichkeiten)
    let diagonal = "", diagonalZwei = ""; //links oben nach rechts unten//links unten nach recht oben

    // Gewinnbedingung (Wie oft muss der Spieler Name hinter einanderstehen/Spielername wird aneinadergereiht)
    let victoryOne = playerOne.repeat(pointsToWin)
    let victoryTwo = playerTwo.repeat(pointsToWin);

    for (let i = 0; i < size; i++) {
        for (let h = 0; h < size; h++) {
            // jedes Feld von links oben nach rechts unten testen
            diagonal = "";
            diagonalZwei = "";
            //nur im array checken
            if (i + (pointsToWin - 1) < size) {
                if (h + (pointsToWin - 1) < size) {
                    for (let m = 0; m < pointsToWin; m++) {
                        // Inhalt des Arrays in string einsetzen
                        diagonal += fieldArray[i + m][h + m];
                    }
                    // Auf Gewinnbedingung überprüfen
                    if (diagonal.includes(victoryOne)) {
                        pointsname1++
                        score();
                        sizeOfField();
                    } else if (diagonal.includes(victoryTwo)) {
                        pointsname2++
                        score();
                        sizeOfField();
                    }
                }
            }
            if (h - (pointsToWin - 1) >= 0) {
                if (i + (pointsToWin - 1) < size) {
                    for (let m = 0; m < pointsToWin; m++) {
                        diagonalZwei += fieldArray[i + m][h - m];
                    }
                    if (diagonalZwei.includes(victoryOne)) {
                        pointsname1++
                        score()
                        sizeOfField();
                    } else if (diagonalZwei.includes(victoryTwo)) {
                        pointsname2++
                        score();
                        sizeOfField();
                    }
                }
            }
        }
    }
}

// Unentschieden / Checken ob es keinen Gewinner gibt
function checkUnentschieden() {
    //standartzusand des Spielfelds
    let EmptyFieldLeft = false;
    //überprüfen ob jedes Kästchen im Spielfeld besetzt ist (weil dann unentschieden ist)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (fieldArray[i][j] === "") {
                EmptyFieldLeft = true;
            }
        }
    }
    //Wenn EmptyFieldLeft true wird ist es ein unentschieden.
    if (!EmptyFieldLeft) {
        alert("Unentschieden!")
        score();
        sizeOfField();
    }
}


// Function um Array komplett zu löschen
function resetArray() {
    fieldArray.splice(0, fieldArray.length)
}

//Function um Spielstand anzuzeigen
function score() {
    // Zeichen "I" jedes mal bei gewinner hinzufügen
    let char = "I"

    //reset span vom letzten Stand 
    $('#score').text("")
    $('#scoreTwo').text("")

    // update span mit aktuellem Stand
    let temp1 = char.repeat(pointsname1)
    let temp2 = char.repeat(pointsname2)
    console.log((pointsname1 % 5) + "|" + (pointsname1 % 5))

    // ab 5 Punkte Linie durchstrichen
    if ((pointsname1) === 5) {
        document.getElementById('score').style.textDecoration = 'line-through';
    }
    if ((pointsname2) === 5) {
        document.getElementById('scoreTwo').style.textDecoration = 'line-through';
    }
    //Aktuellen Stand an HTML-Span schicken
    $('#score').text(temp1)
    $('#scoreTwo').text(temp2)
    resetArray();
}


//js ignoriert weil onclick in html 
//jshint ignore:start
// Zufallszahl generieren um zufällig einen Spieler auszuwählen
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//jshint ignore:end