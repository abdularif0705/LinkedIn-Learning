/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

// const main = document.querySelector(".maincontent");
let secondLastChild = document.querySelectorAll(".backpack li:nth-last-child(2)"); // Select the second last child of the list
console.log(secondLastChild);

// Select all elements matching the selector
let elements = document.querySelectorAll(".backpack li:last-child");

// Check if there are at least two elements in the NodeList
if (elements.length > 1) {
    // Access the second element (index 1) and change its background color - for pack02 green frog ONLY
    elements[1].style.backgroundColor = "green"; // Change to your desired color
} else {
    console.log("There are less than two elements in the NodeList.");
}
