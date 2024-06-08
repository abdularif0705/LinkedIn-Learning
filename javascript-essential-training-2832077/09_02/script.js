/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */

const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span");
const posY = document.querySelector(".posY span");

// Log when the button is clicked in the console.
button.addEventListener("click", () => {
  button.classList.toggle("active");
  console.log("Button was clicked!");
}, false);

// Update the x and y displays to show the current mouse position.
const mousePosition = (event) => {
  posX.innerText = event.pageX;
  posY.innerText = event.pageY;
  console.log(event); // Log the event object to the console. Check the event object in the console, and it will show you ALL the properties and methods available.
};

// append addEventListener tp the window object to track the mouse position. That means everything inside the window will be tracked.
window.addEventListener("mousemove", mousePosition, false); // Triggered every time the mouse moves. And we call the mousePosition function. 

// Change the color of the box when the mouse enters and leaves the container.
container.addEventListener(
  "mouseenter",
  () => {
    container.classList.add("blue");
  },
  false
);

container.addEventListener(
  "mouseleave",
  () => {
    container.classList.remove("blue");
  },
  false
);
