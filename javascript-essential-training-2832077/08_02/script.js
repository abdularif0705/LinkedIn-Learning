/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
function doSomeMath(a, b) { // hoisted to global scope meaning it can be called even if it's declared in a local scope
  let c = a + b;
  return c;
}

// Function expression:
const doMoreMath = function (a = 3, b = 2) { // not hoisted to global scope meaning it can't be called before it's declared, they only exist in the scope they were created. In function expressions awe decalre a variable (in this case a const) and attach the variable to an anonymous function (a function without a name). This is the preferred way to declare functions in modern JavaScript frameworks like React. And best practice is to use const and it is also best practice to use arrow functions. 
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));

// Immediately Invoked Function Expression (IIFE) - a function that is executed right after it's encountered by the browser. It's a way to encapsulate code and avoid polluting the global scope. It's a bit of an anti-pattern because it's not very readable.
(function () {
  let a = 4;
  let b = 6;
  let c = doSomeMath(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();
