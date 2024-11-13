const heading=document.getElementById('heading');
console.log(heading);
const text=document.getElementsByClassName('text');
console.log(text)
const paragraphs=document.getElementsByTagName('p');
console.log(paragraphs)

// Accessing elemets by query selector
const heading2=document.querySelector('#heading');
console.log(heading2);
const listItems=document.querySelectorAll('#list li')
console.log(listItems);
// Modifying element content using textContent
const firstParagraph=text[0];
firstParagraph.textContent="This is an updated paragraph"
const listItem=listItems[0];
listItem.setAttribute('class','highlights')

const button=document.querySelector('#btn');
button.style.backgroundColor="blue";
button.style.color="white";
// Creating new element
const newParagraph=document.createElement('p');
newParagraph.textContent="This is a new Paragraph";
const container=document.querySelector('.container');
container.appendChild(newParagraph);
// Rome elements dynamically
const secondItem=listItems[1];
secondItem.remove();