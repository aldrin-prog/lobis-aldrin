const numbers = [1, 2, 3, 4, 5];
numbers.forEach(element=>{
    console.log(element);
})
const squares=numbers.map((number)=>number*number);
console.log(squares);
// The filter() 
// method creates a new array 
// with all elements that pass the test implemented by the provided function.
const evenNumbers=numbers.filter((number)=> number%2==0 );
console.log(evenNumbers);
// The split() method splits a string 
// object into an array of strings by separating the string into substrings.
const message="Hello, World!";
const words=message.split(', ');
console.log(words);
// The trim() method removes whitespace from both ends of a string.
const paddedText = "   Hello!   ";
const trimmedText = paddedText.trim();
console.log(trimmedText);
// The Object.keys() method returns an array of a given object's own enumerable property names.
const person = { name: "John", age: 30, city: "New York" };
const keys=Object.keys(person);
console.log(keys);
// The Object.values() method returns an array of a given object's own enumerable property values.
const values = Object.values(person);
console.log(values);

// Example 11: Math.max()
// The Math.max() function returns the largest of the zero or more numbers given as input parameters.
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);
// Output: 20
// Example 12: Math.random()
// The Math.random() function returns a floating-point, pseudo-random number between 0 and 1.
const randomValue = Math.random();
console.log(randomValue);
// Output: a random number between 0 and 1

// Example 13: Date()
// The Date() constructor creates a new in
// Example 13: Date()
// The Date() constructor creates a new instance of the Date object representing the current date and time.
const currentDate = new Date();
console.log(currentDate);
// Output: the current date and time

// More examples with Math object, parseInt(), and parseFloat()

// Example 14: Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a given number.
const roundedNumber = Math.floor(3.7);
console.log(roundedNumber);
// Output: 3

// Ex