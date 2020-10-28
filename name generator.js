//Zufallsfunktion einsetzen

/* Legt in einem Array für jeden Artikel (Der, Die, Das, Die (Pl.)) ein Objekt
mit den Attributen "article" (String) und "plural" (Boolean) an.
Erweitert euren Code vom letzten Mal so, dass die Abfrage überprüft,
ob der zufällig gewählte Artikel singular oder plural ist, und gleicht dementsprechend das Adjektiv an.
Verändert euren Code so, dass nacheinander 10 verschiedene Namen ausgegeben werden, wenn ihr das Programm einmal ausführt */

function getRandomInt(max) {
    let flex = Math.floor(Math.random() * Math.floor(max));
    console.log(flex)
    return flex
}


// Einen Verkettung von verschiedenen arrays mit deutschen Wörtern (Artikel – Adjektiv – Substantiv) erstellen 

const Artikel = [{ artlice = "Das ", plural: false }, { article = "Der ", plural: false }, { article = "Die ", plural: false }, { article = "Die ", plural: true }]

const das = { artlice = "Das ", plural: false }

const der = { article = "Der ", plural: false }

const die = { article = "Die ", plural: false }

const die = { article = "Die ", plural: true }


let Adjektiv = ["süß", "schlau", "nett", "bös", "dick", "dumm", "eklig", "erotisch", "gemein"]

let Substantiv = ["Pornodarsteller", "Bürgermeister", "Junge", "Räuber", "Rabauke", "Gemeinling", "Schurke", "Bösewicht", "Prinzessin"]

let SubstantivPlural = ["Pornodarsteller", "Bürgermeister", "Jungen", "Räuber", "Rabauken", "Gemeinlinge", "Schurkem", "Bösewichte", "Prinzessinen"]

let SubstantivDie = ["Pornodarstellerin", "Bürgermeisterin", "Mädchen", "Räuberin", "Gemeine", "Schurkin", "Bösewichtin", "Prinzessin"]

//console.log erstellen

//Zufälle erstellen

const art = Artikel[getRandomInt(4)]

let adj = Adjektiv[getRandomInt(9)]

//Adjektive angleichen

for (let i = 0; i < 10; i++){
    
    if (art.plural === true) {
        adj = adj + "en"
        console.log(art + adj + " " + SubstantivPlural[getRandomInt(9)])
    }

    else if (art.article === "die") {
        adj = adj + "e"
        console.log(art + adj + " " + SubstantivDie[getRandomInt(9)])
    }

    else if (art.article === "der"){
        adj = adj + "e"
        console.log(art + adj + " " + Substantiv[getRandomInt(9)])
    }
}

