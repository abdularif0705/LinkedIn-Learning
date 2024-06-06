/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
document.querySelector(".site-title").style.backgroundColor = "pink" 
document.querySelector(".site-title").style.color = "rebeccapurple" 
document.querySelector("img").setAttribute("title", "Shouldn't be in this img tag/element") 
console.log(document.querySelector("img").getAttribute("title"))
console.log(document.querySelector("img").hasAttribute("title"))
console.log(document.querySelector("img").removeAttribute("title"))
console.log(document.querySelector("main li:first-child").classList)
console.log(document.querySelector("main li:first-child").classList.add("new-class"))
console.log(document.querySelector("main li:first-child").classList.remove("new-class")) //undefined is returned because the class was removed
console.log(document.querySelector("main li:first-child").classList.toggle("new-class"))


// Select the button and the element
const button = document.getElementById('button');
// const element = document.getElementById('h1');
const element = document.querySelector('h1');
const element1 = document.querySelector(".backpack"); // Select one element with the class 'backpack' so we can add an inline style to it. We prepend the class with a period to indicate that it is a class. We used querySelector() to select the first element with the class 'backpack'.
console.log(element1)
// // Add an event listener to the button
// button.addEventListener('click', () => {
//     // Toggle the 'active' class on the element
//     element.classList.toggle('active');
// });



// Add two classes to an element
element.classList.add('class1', 'class2');

// Remove one of the classes
element.classList.remove('class1');
element.classList.toggle('class1');



// Add a new attribute
element.setAttribute('data-info', 'some data');

// Get the value of the attribute
let data = element.getAttribute('data-info');
console.log(data);

// Change the value of the attribute
element.setAttribute('data-info', 'new data');
console.log(element);



element1.classList.toggle('class1');
element1.setAttribute('data-info', 'some data');
let data1 = element1.getAttribute('data-info');
console.log(data1);
// Add an inline style
element1.style.color = 'red';

// Query the style property
console.log(element1.style);
console.log(element1);
