let start= prompt("Enter min number");
let end  = prompt("Enter max number")
start=parseInt(start);
end=parseInt(end);
if(!start || !end){
    alert("Please Enter a valid Integer number");
    window.location.reload();
}
for(let i=start;i<=end;i++)
    console.log(i);