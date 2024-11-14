// Calculate the square root of a given number
const number=prompt("Enter Given number");
const squareNum = Math.sqrt(parseInt(number))
console.log(`Square root of ${number} is  ${squareNum}`);
// Generate a random number between 1 and 10
const randomNum=Math.random()*(10-1)+1;
console.log('Random Number :'+Math.floor(randomNum));

// Convert a string representation of a number to an actual number
const str1="10";
console.log(str1 +' is a type of '+ typeof(str1));
console.log(`${str1} is a type of ${typeof(parseInt(str1))}`);

// Check if a value is not a number
const isNaN = (value)=>{
    if(typeof(value)!='number')
        console.log(`Value ${value} is not a number`);
    else{
        console.log(`Value ${value} is a number`);
    }
}
const value1=12;
const value2="test";
isNaN(value1);
isNaN(value2);
// Convert a number to a string
const num1=12;
const numStr1=num1.toString();
console.log(numStr1);