import "./App.css";
import { useState, useEffect } from "react"; // useState is a hook that lets you add state to your function components. useEffect is a hook that lets you perform side effects in function components like data fetching, subscriptions, or manually changing the DOM from React components. Subscriptions are a more advanced use case for useEffect that allows you to subscribe to a state or prop and update the component when the state or prop changes.

// const [firstCity, second] = ["Toronto", "New York", "Los Angeles", "Chicago"];
// console.log(firstCity); // Toronto
// console.log(second); // New York

function App() { // destructuring the library prop from the props object by reaching in and grabbing it by its key
  const [emotion, setEmotion] = useState("happy") // returns an array with two elements: the current state value and a function that lets you update it
  const [secondary, setSecondary] = useState("tired") 

  useEffect(() => {
    console.log(`It's ${emotion} around here!`); // log the current emotion to the console, note we use a template literal to interpolate the value of the emotion variable rather than a JSX expression because we are not inside the return statement
  }, [emotion, secondary]) // the second argument is an array of dependencies that the effect depends on. If the value of the emotion variable changes, the effect will run again. Dependency arrays are important so don't forget to include them when using useEffect
  useEffect (() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary])

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <buttton onClick={() => setEmotion("frustrated")}>
        frustrated
      </buttton>{" "}
      {/* call setEmotion to update the state value to a new state value like "frustrated"
       */}
      <buttton onClick={() => setEmotion("excited")}>excited</buttton>
      <buttton onClick={() => setEmotion("sad")}>sad</buttton>
      <h2>Current secondary emotion is {secondary}</h2>
      <buttton onClick={() => setSecondary("grateful")}>grateful</buttton>
    </div>
  );
}

export default App;
