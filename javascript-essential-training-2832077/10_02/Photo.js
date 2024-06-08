/**
 * Fragment from React Photo Gallery component.
 * By Sandra Gonzales @neptunian
 * @link https://github.com/neptunian/react-photo-gallery
 * The MIT License (MIT)
 * Copyright (c) 2015-2018 Sandra Gonzales
 */

// Somewhere in the code we have React and PropTypes componenets and we import them to use them in this Photo component.
import React from "react";
import PropTypes from "prop-types";

const imgWithClick = { cursor: "pointer" }; // const variable imgWithClick is an object with one property cursor set to "pointer". In React developers prefer to use objects for pretty much everything. This is a common pattern in React. Objects are easy to work with and they are the core piece of JavaScript. So saving data in objects makes sense.

// React components are the React version of JavaScript classes 
const Photo = ({ // first in the Photo component we have a list of properties that we are going to use in the Photo component.
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
  key,
}) => { // then we have the arrow function that captures the properties and returns the JSX code that will be rendered in the browser.
  const imgStyle = { margin: margin, display: "block" }; // imgStyle is an object that has two properties for CSS
  if (direction === "column") { // if the direction is set to column
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = (event) => { // handleClick is an arrow function that effictively does the same thing as an event listener in vanilla JavaScript. It takes an event as an argument and calls the onClick function with the event and an object with the photo and index properties.
    onClick(event, { photo, index });
  };

  return ( // returns JSX code which is like template literals but no need to use backticks. And no need to use the ${} syntax to interpolate variables. JSX is a syntax extension for JavaScript that looks like HTML. It is often used with React to describe what the UI should look like.
    <img
      key={key}
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
    />
  );
};

export const photoPropType = PropTypes.shape({ // using the PropTypes.shape method to define the photoPropType object. This object is used to set up rules for what the photo object should look like. It has a src property that must be a string and is required for the component to output content. 
  key: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Photo.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  photo: photoPropType.isRequired,
  margin: PropTypes.number,
  top: (props) => { // uses arrow function but we can;t do that in vanilla JavaScript. This is a feature of React. 
    if (props.direction === "column" && typeof props.top !== "number") {
      return new Error(
        "top is a required number when direction is set to `column`"
      );
    }
  },
  left: (props) => {
    if (props.direction === "column" && typeof props.left !== "number") {
      return new Error(
        "left is a required number when direction is set to `column`"
      );
    }
  },
  direction: PropTypes.string,
};

export default Photo;
