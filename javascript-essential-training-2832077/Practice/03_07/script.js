/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const closet = {
    color: "white",
    length : 7,
    shelf : { // Nested object
        height : 3,
        color : "white",
        shelves : 3
    }
}
console.log(closet.color);
console.log(closet.shelf.color);

const box = {
    name : "box",
    color: "brown",
    box: {
        name: "box in a box",
        color: "white",
        type: "bomb"
    }
}
