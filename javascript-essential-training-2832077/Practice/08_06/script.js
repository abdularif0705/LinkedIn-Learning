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
        <h1>${data.title}</h1>
        <p>${data.body}</p>
    `
    return newArticle
}

const changeBackgroundColor = (element, color) => {
    element.style.backgroundColor = color
}

const changeColor = function (element, color) {
    element.style.color = color
}

const data = {
    title: "Hello World",
    body: "This is a test article",
}

const article = createArticle(data); // Create the article element
main.append(article); // Append the article to the main element

const articleBody = article.querySelector("p"); // Select the paragraph element inside the article
changeBackgroundColor(articleBody, "pink"); // Change the background color of the paragraph to pink
changeColor(articleBody, "rebeccapurple"); // Change the text color of the paragraph to rebeccapurple

const articleTitle = article.querySelector("h1"); // Select the h1 element inside the article
changeBackgroundColor(articleTitle, "lightblue"); // Change the background color of the paragraph to pink
changeColor(articleTitle, "royalblue"); // Change the text color of the paragraph to rebeccapurple

console.log(data); // This will log the data object to the console