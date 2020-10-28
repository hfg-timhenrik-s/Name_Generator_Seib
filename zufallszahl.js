/* Deklariert ein leeres Arry. (leeres Array ist [])
Befüllt das Array mit 10 Zufallszahlen zwischen 0 und 20. (-> Schleife)
Gebt nach dem Füllen das Array aus. (-> console.log  nach der Schleife) */

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max));
    return flex
}

let numbers = []

for (let index = 0; index < 10; index++) {
    numbers[index] = getRandomInt(20)
}


for (let j = 0; j < 10; j++) {
    if (numbers[j] <= 10) {
    numbers[j]++
    }
    else {
        numbers[j]--
    }
}
console.log(numbers)