const students = [
                {name:"John Doe",
                 age:25,
                 grade:90
                },
                {name:"Sarah Smith",
                 age:23,
                 grade:87
                },
                {name:"Carla Stone",
                 age:34,
                 grade:90
                },
            ]
console.log(students[1]);
students.push({name:"Steven Universe",age:34,grade:80});
students.forEach((student)=>{
    console.log("Name: "+student.name);
    console.log("Grade: "+student.grade);
});

// 
const book={
        title:"Harry Potter Book 1",
        author:"J.K Rowling",
        year:1991,
        getSummary:function(){
            console.log("Title : "+this.title);
            console.log("Author : "+this.author);
            console.log("Published Year : "+this.year);
        }
    }
console.log(book.title);
book.year=1930;
book.getSummary();
const library=[];
library.push(book);
console.log(library);
const car={
    brand:"Toyota",
    model:"HyperMax",
    year:2022,
    startEngine:function(){
        console.log("The card engine is starting...");
    }
}
console.log(car.model);
car.year=2023;
car.startEngine();
const garage=[];
garage.push(car);
console.log(garage);
// book["getSummary"]=function(){}
const person={
        name:"John Doe",
        age:45,
        city:"Taguig"
    };
console.log("Person age: "+person.age);

