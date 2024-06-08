/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "6px solid red";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

/**
 * Function to generate random hex color
 */
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

// Get all cells
const gridCells = document.querySelectorAll(".cell");

// For each cell, add eventlisteners aplenty
gridCells.forEach((cell) => {
  // Set outline when cell is hovered
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "2px solid red";
  });

  // Remove outline when cell is exited
  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });

  // Set/remove random background color on click
  cell.addEventListener("click", () => {
    if (cell.style.backgroundColor) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = `#${randColor()}`;
    }
  });
});

/**
 * Set page background using the "d" key on the keyboard
 */
const body = document.body;
body.addEventListener("keydown", (event) => {
  // event.code holds the current key pressed:
  console.log(event.code);

  // Test for KeyD (the "d" key)
  if (event.code === "KeyD") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
      : (body.style.backgroundColor = "");
  }
});

/* "hsl(201, 34%, 13%)" is a color value represented using the HSL (Hue, Saturation, Lightness) color model. Let's break down each component:

Hue (201):
Hue represents the base color or the position on the color wheel.
It is specified as an angle value ranging from 0 to 360 degrees.
In this case, a hue of 201 corresponds to a blue-cyan color.
Hue values:
0 or 360: Red
120: Green
240: Blue
60: Yellow
180: Cyan
300: Magenta
Saturation (34%):
Saturation represents the intensity or purity of the color.
It is specified as a percentage value ranging from 0% to 100%.
0% means no saturation (grayscale), while 100% means full saturation (pure color).
In this case, a saturation of 34% means the color is slightly desaturated, resulting in a muted or pastel-like appearance.
Lightness (13%):
Lightness represents the brightness of the color.
It is specified as a percentage value ranging from 0% to 100%.
0% means completely dark (black), while 100% means completely light (white).
50% lightness represents the normal or default lightness of the color.
In this case, a lightness of 13% means the color is quite dark, closer to black.
Putting it all together, "hsl(201, 34%, 13%)" represents a dark blue-cyan color with a slight desaturation. The specific values of hue, saturation, and lightness determine the exact appearance of the color. */
