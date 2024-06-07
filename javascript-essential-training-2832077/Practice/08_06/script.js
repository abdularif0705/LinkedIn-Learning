/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const main = document.querySelector("main") // This will select the main element

function createArticle(data) { // This function will create an article element with the data from the object
    const newArticle = document.createElement("article")
    newArticle.classList.add("newClass")
    newArticle.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
    `
    return newArticle
}

const changeColor = (element, color) => {
    element.style.backgroundColor = color
}

const changeColor2 = function (element, color) {
    element.style.color = color
}

const data = {
    title: "Hello World",
    body: "This is a test article",
}

changeColor(data.body, "pink") // This will change the background color of the body of the data object to pink
changeColor2(data.body, "rebeccapurple") // This will change the color of the body of the data object to rebeccapurple
console.log(data) // This will log the body of the data object to the console
main.append(createArticle(data)) // This will append the article to the main element
