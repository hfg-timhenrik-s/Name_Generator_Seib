// zwei Arrays mit jeweils 10 verschiedenen Wörtern anlegen.

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

    if (randome > 0.5) {
        password = eins + zwei
            if (password.length < 12){
                password = password + Start[getRandomInt(Start.length)]
            }
        console.log("das " + i + " geheime Passwort lautet " + password);
    }
    else if (randome < 0.5) {
        password = zwei + eins
        if (password.length < 12){
            password = password + Start[getRandomInt(Start.length)]
        }
        console.log("das " + i + " geheime Passwort lautet " + password);
    }
}
