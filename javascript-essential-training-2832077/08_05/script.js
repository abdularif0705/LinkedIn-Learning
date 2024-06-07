/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    // (function () { // IIFE - Immediately Invoked Function Expression - this is a function that is executed right after it's encountered by the browser. It's a way to encapsulate code and avoid polluting the global scope. It's a bit of an anti-pattern because it's not very readable. It is hoisted to the global scope. 
    // This is where the arrow function comes in handy because it doesn't have its own this keyword, it inherits the this keyword from the parent scope.
    //   console.log("this.volume in nested function:", this.volume);
    // })();
  },
};

console.log(greenPack.newVolume(5));
