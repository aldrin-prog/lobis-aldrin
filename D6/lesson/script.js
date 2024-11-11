
let new_fruits= new Array("apple","banana","orange");

new_fruits.push("strawberry");
new_fruits.pop();
new_fruits.unshift("strawberry");
new_fruits.shift();
new_fruits.splice(0,1);
let numbers=[1,2,3,4,5];
let sum=numbers.reduce((total,num)=>total+num,90);
// numbers.forEach((item,index,array)=>{
//     array[index]=item**2;
// })
console.log(numbers);
console.log(numbers.indexOf(3));
console.log(numbers.includes(5))
console.log(numbers.join("-"));
console.log(numbers.slice(1,3))