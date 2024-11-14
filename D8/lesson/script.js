// destructuring
const numbers = [1, 2, 3, 4, 5];
const [first,second,...rest]=numbers
console.log(first);
console.log(second);
console.log(rest);
// 
const person = { name: 'Bob', age: 30, country: 'USA' };
const {name:personName,age,country}=person;
console.log(country);
console.log(age);
console.log(personName);
/*
Spread and Rest Operators - Gather and Spread Values
The spread and rest operators (...) look the same but serve different purposes based on where they are used.
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray=[...array1,...array2];
console.log(combinedArray);