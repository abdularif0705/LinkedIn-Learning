/**
 * Event listeners
 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */
import backpackObjectArray from "./components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function () {

  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find( ({ id }) => id === this.parentElement.id ); // this.parentElement.id is the id of the parent element of the button that was clicked and passed to the lidToggle function which passes it to the find method to find the object with the same id
  
  // Toggle lidOpen status
  backpackObject.lidOpen == true 
    ? backpackObject.lidOpen = false 
    : backpackObject.lidOpen = true;

  // Toggle button text
  this.innerText == "Open lid" 
    ? this.innerText = "Close lid" 
    : this.innerText = "Open lid";

  // Set visible property status text
  let status = this.parentElement.querySelector(".backpack__lid span");
  status.innerText == "closed"
    ? (status.innerText = "open")
    : (status.innerText = "closed");
}

/**
 * - Loop through backpackObjectArray
 * - create article for each entry
 * - add articles back to backpackList array
 */
const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
  `;

  const button = backpackArticle.querySelector(".lid-toggle")
  const status = backpackArticle.querySelector(".backpack__lid span")

  // button.addEventListener("click", (event) => { // arrow function don't have their own this, so this won't work
  button.addEventListener("click", function (event) { // this will work because this is bound to the button element
    console.log(event)
    // button.innerText === "Open lid" ? button.innerText = "Close lid" : button.innerText = "Open lid"
    this.innerText === "Open lid" ? this.innerText = "Close lid" : this.innerText = "Open lid" // will work because this is bound to the button element
    status.innerText === "open" ? status.innerText = "closed" : status.innerText = "open"
  })

  // 2nd WAY IS TO USE THE lidToggle function as a callback function so the this is scoped to the object button which called the addEventListener
  // Add event listener and call lidToggle function as a callback
  button.addEventListener("click", lidToggle); // when the button is clicked, the lidToggle function is called and then the this in the lidToggle function refers to THIS button that was clicked

  return backpackArticle;
});

const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});
