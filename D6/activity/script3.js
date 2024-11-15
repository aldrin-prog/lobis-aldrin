// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(num){
    if(num%2==0)
        return true;
    return false;
}
// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for(let i=0;i<=10;++i)
    console.log(isEven(i));
// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
function multiply(num1,num2){
    return num1*num2;
}
// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
let num1=0;
let num2=0;
// while(num1>=0|| num2>=0){
//     // num1=prompt("Enter first number");
// }
// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(str){
    return str.split('').reverse().join('');
}
// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log(reverseString('hello'));
// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
function countVowels(str){
    
    let count=0;
    for(let i=0;i<str.length;i++){
        let char=str[i].toUpperCase();
        if(char=='a'||char=='i'||char=='e'||char=='o'||char=='u')
            count+=1;
    }
    return count;
}
// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log(countVowels('JavaScript'));

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
            max=arr[i];
    }
    return max;
}
// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log(findMax([4, 9, 2, 7, 5]));
// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(num){
    if(num==1){
        return 1;
    }
    return num*calculateFactorial(num-1);
}
// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log(calculateFactorial(5));
// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
function isPalindrome(str){
    let r_str=str.split('').reverse().join('');
    if(r_str==str)
        return true;
    return false;
}
// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log(isPalindrome('level'));
// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log(sumArray([1, 2, 3, 4, 5]));
// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizedFirstLetter(str){
    str[0]=str[0].toUpperCase();
    return str;
}
// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log(capitalizedFirstLetter('javascript'));
// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(arr){
    let new_arr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0)
            new_arr.push(arr[i]);
    }
    return new_arr;
}
// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));