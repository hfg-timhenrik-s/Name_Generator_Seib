// Punktestand der Spieler
let pointsname1 = 0;
let pointsname2 = 0;
// UI erstellen
let size = ""
let id = ""
let fieldArray = []
//Spielfeldgröße abfragen
let fieldX = $("#fieldX").val()

//Funktion zum bauen eines Spielfelds
//Feld Größe entscheiden 
function sizeOfField() {
    $("tr").remove()
    //(Wert wird vom fieldX Input feld genommen)
    size = $("#fieldX").val()
    console.log(size)

    for (let i = 0; i < size; i++) {

        //create Array für jede Zeile
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
let playerOne = ""
let playerTwo = ""
let aktuellerSpieler

//Zufällig Spieler auswählen, welcher beginnnt
// Fehler in jshint bleibt bestehen da immer weiter verschachtelte Funktionen aufgerufen werden

function beginner() {
    if (getRandomInt(2) >= 1) {
        aktuellerSpieler = playerOne
    } else {
        aktuellerSpieler = playerTwo
    }
    return aktuellerSpieler
}

//It´s your turn Feld mit Inhalt füllen wird von js ignoriert weil onclick in html 
//jshint ignore:start
function confirm() {
    playerOne = document.getElementById("PlayerOne").value
    playerTwo = document.getElementById("PlayerTwo").value
    // Spielernamen ins Span playerTurn einfügen
    document.getElementById("playerTurn").innerText = beginner()
}
//jshint ignore:end

//abwechselnd Spieler (Player 1 oder Player 2)

function change() {
    if (aktuellerSpieler === playerOne) {
        aktuellerSpieler = playerTwo
    } else if (aktuellerSpieler === playerTwo) {
        aktuellerSpieler = playerOne
    } // Spielernamen ins Span playerTurn einfügen
    document.getElementById("playerTurn").innerText = aktuellerSpieler
}

//ersetzt den Text-Inhalt des span
$("span#playerTurn").text(aktuellerSpieler)

//Auf User Klick reagieren
//anklickbar machen
//Nur ein Zeichen Pro Feld

function clickPlayer(id) {
    // wenn diese Farbe im CSS ist soll Farbe geändert werden
    if ($("#" + id).css("background-color") === "rgb(204, 197, 185)") {
        $("#" + id).css("background-color", colourChange());
        // Angeklickte Zelle im Array mit dem playernamen füllen
        id = id.replace("Zelle", "")
        let zeile = id[0];
        let reihe = id[1];
        fieldArray[zeile][reihe] = aktuellerSpieler;
        console.log(fieldArray)
        checkUnentschieden() 
        WinCheck()
        change()
    }
}

//Bei neuem Spieler und nach klick bekommt man eine neue farbe

function colourChange() {
    //PlayerOne hat Farbe Türkis
    if (aktuellerSpieler === playerOne) {
        return "#78CDD7"
    } //PlayerTwo hat Farbe Rosa 
    else if (aktuellerSpieler === playerTwo) {
        return "#F7CACD"
    }
}

//Gewinnbedingung erstellen (wie viele Zeilen müssen nebeneinander liegen für den sieg)
let pointsToWin = 3;

//felder auf Gewinnbedingung prüfen
function WinCheck() {
    // Deklariation von Variablen (Gewinnmöglichkeiten/Spielfeldgröße)
    let horizontal = "";
    let vertikal = "";
    // Gewinnbedingung (Wie oft muss der Spieler Name hinter einanderstehen /Spielername wird aneinadergereiht)
    let victoryOne = playerOne.repeat(pointsToWin)
    let victoryTwo = playerTwo.repeat(pointsToWin)
    // vertikal und horizontal Linien testen
    for (let i = 0; i < fieldX; i++) {
        horizontal = "";
        vertikal = "";
        //Jedes Feld in der Linie testen
        for (let t = 0; t < fieldX; t++) {
            // Inhalt der Felder in string einsetzen

            horizontal += fieldArray[i][t]
            vertikal += fieldArray[t][i]
        }
        // die erstellten Strings auf die Gewinnbedingung kontrollieren
        if (horizontal.includes(victoryOne)) {
            alert(playerOne + " won")
            pointsname1++
            score();
            sizeOfField();
        }
        else if (horizontal.includes(victoryTwo)) {
            alert(playerTwo + " won")
            pointsname2++
            score();
            sizeOfField();
        }
        if (vertikal.includes(victoryOne)) {
            alert(playerOne + " won");
            pointsname1++
            score();
            sizeOfField();
        }
        else if (vertikal.includes(victoryTwo)) {
            alert(playerTwo + " won")
            pointsname2++
            score();
            sizeOfField();
        }
    }
    WinCheckDiagonal()
}

function WinCheckDiagonal() {
    // diagonale Felder checken
    let diagonal = "", diagonalZwei = ""; //links oben nach rechts unten//links unten nach recht oben

    // Gewinnbedingung (Wie oft muss der Spieler Name hinter einanderstehen /Spielername wird aneinadergereiht)
    let victoryOne = playerOne.repeat(pointsToWin), victoryTwo = playerTwo.repeat(pointsToWin);

    for (let i = 0; i < fieldX; i++) {
        for (let h = 0; h < fieldX; h++) {
            // jedes Feld von links oben nach rechts unten testen
            diagonal = "";
            diagonalZwei = "";
            //nur im array checken
            if (i + (pointsToWin - 1) < fieldX) {
                if (h + (pointsToWin - 1) < fieldX) {
                    for (let m = 0; m < pointsToWin; m++) {
                        diagonal += fieldArray[i + m][h + m];
                    }

                    // gewinner checken
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
                if (i + (pointsToWin - 1) < fieldX) {
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

//Checken ob es keinen Gewinner gibt / Unentschieden
function checkUnentschieden() {
    let EmptyFieldLeft = false;
    
    //check if our whole field is full, in which case we have a draw
    for (let i = 0; i < fieldX; i++) {
        for (let j = 0; j < fieldX; j++) {
            if (fieldArray[i][j] === "") {
                EmptyFieldLeft = true;
            }
        }
    }
    //this is executed if we have a draw, we add our play Again button.
    if (!EmptyFieldLeft) {
        alert("Unentschieden!")
        score();
        sizeOfField();
    }
}


// Array komplett löschen
function resetArray() {
    fieldArray.splice(0, fieldArray.length)
}

//Spielstand anzeigen
function score() {
    // Zeichen "I" jedes mal bei gewinner hinzufügen
    let char = "I"
    //reset span
    $('#score').text("")
    $('#scoreTwo').text("")
    // update span

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
    $('#score').text(temp1)
    $('#scoreTwo').text(temp2)
    resetArray();
}

$("span#score").text(score()) //ersetzt den Text-Inhalt des span

// Zufallszahl generieren
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
