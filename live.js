const word = ["dog","car","the","cat","hat","bus"]

let counterA = 0 ;
let counterB = 0 ;
let counterCD = 0 ;

for (let j = 0; j < 5; j++){
    console.log("The Word " + word[j] + " contains of " + "3 " + "letters")
    
    let choosenword = word[j]

    for(let i = 0; i<3; i++) {
        if (choosenword[i] === "a" ) {
            counterA++
        }
        else if (word[j][i] === "b" ) {
            counterB++ 
        } else if (word[j][i] === "c" || choosenword[i] === "d" ) {
            counterCD++ 
        }
    }
console.log ("we got a total of " + counterA + " a´s " + counterB + " b´s " + counterCD + " c and d´s");

counterA = 0
counterB = 0
counterCD = 0
};