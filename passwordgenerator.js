// zwei Arrays mit jeweils 10 verschiedenen Wörtern anlegen.
// mehr Arrays zum experimentieren 

const Wort = ["cake", "car", "rat", "sussage", "toilettpaper", "keysentence", "teacup", "beer", "princess", "coffeemachine"]

const Start = ["sweet", "bad", "cute", "angry", "password", "secret", "safe", "crazy", "fancy", "happy"]

//getRandomInt function einsetzten

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max));
    return flex
}

//let function einsetzen um wörter zufällig auszuwählen

let eins = Start[getRandomInt(Start.length)]

let zwei = Wort[getRandomInt(Wort.length)]

let number = getRandomInt(1000)

//Wörter aneinader reihen mit let

let password = eins + zwei

//console.log um den Satz "Das Passwort lautet " auszugegeben

//console.log("das geheime Passwort lautet " + password);

//for Schleie generieren bis 8
// länge mit .length prüfen
//mit if abfrage ansagen was dann passiert

for (let i = 1; i < 11; i++) {
    let randome = Math.random()
    eins = Start[getRandomInt(Start.length)]
    zwei = Wort[getRandomInt(Wort.length)]
    number = getRandomInt(1000)

    if (randome > 0.5) {
        password = eins + zwei
        if (password.length < 12) {
            password = password + Start[getRandomInt(Start.length)] + " weil es nicht lang genug war."
        }
        console.log("das " + i + " geheime Passwort lautet " + password);
    }
    else if (randome < 0.5 && randome > 0.4) {
        password = zwei + eins
        if (password.length < 12) {
            password = password + Start[getRandomInt(Start.length)] + "weil es nicht lang genug war."
        }
        console.log("das " + i + " geheime Passwort lautet " + password);
    }
    //Wenn randome < 0,2 soll eine zufällige zahl vorne dran gehangen werden
    else if (randome < 0.2) {
        password = number + eins + zwei
        console.log("das " + i + " geheime Passwort lautet " + password);
    }
    else if (randome > 0.2 && randome < 0.4) {
        //einzelne Zeichen mit anderen Zeichen ersetzen, und zwar mit der HelperFunktion "replace", euerWort = euerWort.replace('was ihr ersetzen wollt', 'mit was ihr es ersetzen wollt')
        eins = eins.replace("s", "XXX")
        password = eins + number
        if (password.length < 10) {
            password = password + number
        }
        console.log("das " + i + " geheime Passwort lautet " + password)
    }
}

/* Experimentiert mit dem Passwort-Generator herumLegt weitere Arrays mit Zahlen, Sonderzeichen, noch mehr Wörtern, etc. an
 und verknüpft sie per zufälliger Auswahl miteinander.
Hinweis: Wenn ihr mehr Wörter o.ä. verknüpfen wollt als 2, funktioniert der Münzwurf-Ansatz natürlich nicht mehr. Ihr könnt in
dem Fall eure if-Abfrage mit if-else z. B. in random < 0.2, random < 0.4, etc. aufsplitten.
Überlegt euch zusätzlich zur Längenüberprüfung weitere if-Bedingungen wie z. B.
Wenn das Passwort mit einem 'c' beginnt, soll ein weiteres Wort vorne angehängt werden.

Wenn das Wort zu kurz ist, soll erst ein Sonderzeichen eingefügt werden und dann das nächste Wort.

Ihr könnt natürlich auch zwei Arrays mit den Buchstaben des Alphabets in Groß- bzw. Kleinschreibung anlegen
und völlig zufällige Zeichenketten bilden.

