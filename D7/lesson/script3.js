// \Handling events involves responding to user 
// interactions, such as clicks, submissions, and 
// keypresses, on web pages. By registering event listeners, 
// you can execute specific actions or functions when an event occurs. 
// Additionally, understanding the event object and its properties allows you to 
// access information related to the event. 
// Event delegation is a technique that optimizes event handling by 
// assigning a single event listener to a parent element instead of attaching listeners to multiple ch

const button=document.querySelector('#btn');
button.addEventListener('click',function(event){
    console.log('The buttons works');
    console.log(event.type);
    console.log(event.target);
})
// Register a submit event listener on a form
const form=document.querySelector('#myForm');
form.addEventListener('submit',function(event){
        event.preventDefault();
        const nameInput=document.getElementById('name');
        const name=nameInput.value;
        console.log(`submitted name ${name}`);
        nameInput.value="";
})