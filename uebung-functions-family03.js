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

console.log(person1 + [" "] + person2 + [" "] + person3 + [" "] + person4 + [" "] + person5)

let Familyname
Famliyname = checkSurname(person1, person2)
console.log(Familyname)


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

// CheckSurname Function 

function checkSurname(givenPerson, givenPerson2) {
        console.log(givenPerson, givenPerson2)
        if(givenPerson[1] === givenPerson2[1]) { 
        return givenPerson + " und " + givenPerson2 + " sind verwandt!"
    } else {
        return givenPerson1 + " und " + givenPerson2 + "sind nicht verwandt"
    }
}
