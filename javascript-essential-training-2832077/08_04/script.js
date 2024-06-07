/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const addPack = function (currentPack) { // function expressions can be hoisted which means they can be called above in the JS code even if they are defined later down the code, this is improper coding practice but it can work
// Arrow functions are not hoisted and can only be called after they are declared. 2nd you can't use arrow functions when declaring methods in objects. In an object, you need to use a proper anonymous function declaration or a function expression. Because arrow functions don't have their own this keyword, they inherit the this keyword from the parent scope.
const addPack = (currentPack) => { // replace the function keyword with an arrow function
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addPack(greenPack));
