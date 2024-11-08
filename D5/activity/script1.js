let score=prompt("Enter A Score");
score=parseInt(score);
if(!score){
    alert("Please enter a valid value");
    window.location.reload();
}
let grade='';
if(score>=90)
    grade='A';
else if(score>=80 && score<=89)
    grade='B';
else if(score>=70 && score<=79)
    grade='C';
else if(score>=60 && score<=69)
    grade='D';
else 
    grade='F';
console.log(grade);