let Person1 = []
let Person2 = []
let Person3 = []
let Person4 = []
let Person5 = []

//Arrays mit Namen

let name = ["Hans","Jakob","Richard","Gustav","Peter","Klaus","Thorben","Friedrich","Jonathan","Casper"]
let surname = ["Eisenhorn","König","Steinmetz","Waldhorn","v. Klausheim"]

Person1 = createName(name.length) + [" "] + createSurname(surname.length)
Person2 = createName(name.length) + [" "] + createSurname(surname.length)
Person3 = createName(name.length) + [" "] + createSurname(surname.length)
Person4 = createName(name.length) + [" "] + createSurname(surname.length)
Person5 = createName(name.length) + [" "] + createSurname(surname.length)

console.log(Person1)
console.log(Person2)
console.log(Person3)
console.log(Person4)
console.log(Person5)


/* 
Speichert euch insgesamt 5 Personen und überprüft, ob jemand den gleichen Nachnamen hat.
Wenn ja, soll ausgegen werden, dass diese beiden Personen verwandt sind.
Wenn alle Personen miteinander verwandt sind, soll etwas besonderes ausgegeben werden. */

//Function die zufälligen Namen sucht

function createName(max) {
    let vorname = []
    for (let i = 0; i < 10; i++) {
        vorname = name[getRandomInt(name.length)]
    }
    return vorname
}

function createSurname(max) {
    let nachname = []
    for (let i = 0; i < 5; i++) { 
    nachname = surname[getRandomInt(surname.length)]
    }
    return nachname
}


//getRandomInt function einsetzten

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max));
    return flex
}
