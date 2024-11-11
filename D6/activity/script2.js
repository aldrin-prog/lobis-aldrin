const greet=function(){
    console.log("Hello World");
}
const add = function(num1,num2){
    return num1+num2;
}
const sum=add(5,3);
console.log(sum);
const multiply=(num1,num2)=>num1*num2;
const product=multiply(4,2);
console.log(product);
const isEven=function(num){
    if(num%2==0)
        return true;
    return false;
}
const even=isEven(6);
console.log(even);

const square=(num)=>num**2;
const squareValue=square(3);
console.log(squareValue);

const fullName=function(firstName,lastName){
    return firstName+" "+lastName;
}
const name=fullName("John","Doe");
console.log(name);
const capitalize=function(param){
    return param.charAt(0).toUpperCase()+param.slice(1);
}
const capitalizedString=capitalize("javascript");
console.log(capitalizedString);