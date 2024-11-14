const givenNumber=25;

// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const square = (num)=> Math.sqrt(num);
console.log(square(givenNumber)) 
const person={name:"John Doe",age:25};
// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const templateLit=`Welcome ${person.name} ${person.age} years old.`

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const [firstName,lastName]=person.name.split(" ");
console.log(firstName);
console.log(lastName);

// Task 4: Use the spread operator to merge two arrays into a single array.

const arr1=[1,2,3];
const arr2=[4,5,6];
const combinedArr=[...arr1,...arr2];
// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const rectangleArea=(w=4,l=4)=>{
    return l*w;
}
console.log(rectangleArea());

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person{
    static name;
    static age;
    constructor(name,age){
        this.age=age;
        this.name=name
    }
    introduce(){
      console.log(`Hello My name is ${this.name} I'm ${this.age} years old.`);  
    }
}
const person1= new Person('John Doe',19);
person1.introduce();