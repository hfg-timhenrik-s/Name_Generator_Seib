let person1 = []
let person2 = []
let person3 = []
let person4 = []
let person5 = []

//Arrays mit Namen

let name = ["Hans","Jakob","Richard","Gustav","Peter","Klaus","Thorben","Friedrich","Jonathan","Casper"]
let surname = ["Eisenhorn","König","Steinmetz","Waldhorn","v. Klausheim"]

person1 = [createName(), createSurname()]
person2 = [createName(), createSurname()]
person3 = [createName(), createSurname()]
person4 = [createName(), createSurname()]
person5 = [createName(), createSurname()]

console.log(person1, person2, person3, person4, person5)

/*let Familyname
Famliyname = checkSurname(person1)
console.log(Familyname)*/



/* 
Speichert euch insgesamt 5 Personen und überprüft, ob jemand den gleichen Nachnamen hat.
Wenn ja, soll ausgegen werden, dass diese beiden Personen verwandt sind.
Wenn alle Personen miteinander verwandt sind, soll etwas besonderes ausgegeben werden.*/ 

function checkSurname(givenPerson) {
    console.log(givenPerson)
    if(givenPerson[1] === person2[1]) { 
    return givenPerson + " und " + person2 + " sind verwandt!"
    } else {
        console.log("nicht verwandt")
        return givenPerson
    }
}



//Function die zufälligen Namen sucht

function createName() {
    return name[getRandomInt(name.length)]
}

function createSurname() {
    return surname[getRandomInt(surname.length)]
}


//getRandomInt function einsetzten

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max));
    return flex
}
