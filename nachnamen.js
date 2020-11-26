//Arrays mit 10 Vornamen und 5 Nachnamen
let vornamen = [ "Max", "Hermine", "Axel", "Gabi", "Luis", "Lilli", "Mark", "Lara", "Leon", "Ella"]
let nachnamen = ["Schuster", "Becker", "Müller", "Schanz", "Hang"]

let pickvornamen = []
let picknachnamen = []

let personEins = []
let personZwei = []
let personDrei = []
let personVier = []
let personFünf = []

//Array für 5 Personen anlegen
personEins = personFill()
personZwei = personFill()
personDrei = personFill()
personVier = personFill()
personFünf = personFill()


//function um person array zu befüllen
function personFill(){
    pickvornamen = vornamen[getRandomInt(vornamen.length)]  //zufällige namen auswählen
    picknachnamen = nachnamen[getRandomInt(nachnamen.length)]
    return [pickvornamen, picknachnamen]
}

//Ausgabe
console.log("Die fünf Personen heißen: " + personEins[0] + " " + personEins[1] + ", " + personZwei[0] + " " + personZwei[1] + ", " + personDrei[0] + " " + personDrei[1] + ", " + personVier[0] + " " + personVier[1] + ", " + personFünf[0] + " " + personFünf[1])
checknachnamen(personEins, personZwei)
checknachnamen(personZwei, personDrei)

//Prüfen ob die Nachnamen gleich sind

function checknachnamen(personEins, personZwei){
    if(personEins[1] === personZwei[1]){
        console.log(personEins[0] + " " + personEins[1] + " ist  mit " + personZwei[0] + " " + personZwei[1] + " verwandt.")
    } else {
        console.log(personEins[0] +  " " + personEins[1] + " ist nicht mit " + personZwei[0] + " " +personZwei[1] + " verwandt.")
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
