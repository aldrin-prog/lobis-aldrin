// Accessing parent, child, and sibling elements using DOM traversal methods
// Access the parent element of a specific element
const container=document.querySelector('#container');
console.log(container.parentNode);
const paragraphs=container.children;
console.log(paragraphs);
// Access the first child element;
const firstParagraph=container.firstElementChild;
const secondParagraph=firstParagraph.nextElementSibling;
console.log(firstParagraph);
console.log(secondParagraph);
console.log(secondParagraph.parentNode);

const contentDiv=document.querySelector('.content');
const nestedParagraph=contentDiv.children[0];
console.log(nestedParagraph);

console.log(nestedParagraph.previousSibling);
console.log(nestedParagraph.nextSibling);