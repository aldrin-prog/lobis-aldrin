// objects literals
const person = {
    firstName:"John",
    lastName:"Doe",
    age:25,
    hobbies:["reading","coding","hiking"],
    greet: function (){
        console.log(`Hello My name is ${this.firstName+" "+this.lastName}`)
    }
}
console.log(person.age);
console.log(person.hobbies[0]);
person.greet();