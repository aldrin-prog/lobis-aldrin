let secretNumber=Math.floor(Math.random() * (10-1)+1);
let attempts=0;
let guessedNumber='';
console.log("Welcome player");
do {
    guessedNumber=prompt("GuessedNumber");
    guessedNumber=parseInt(guessedNumber);
    attempts+=1;
    if(guessedNumber<secretNumber)
        console.log("Too low! Try again.");
    else if(guessedNumber>secretNumber)
        console.log("Too high! Try again.");
    else{
        console.log(`Congratulations! You guessed the correct number: [${secretNumber}]`);
        console.log(`It took you [${attempts}] attempts.`)
    }
}while(guessedNumber!=secretNumber)