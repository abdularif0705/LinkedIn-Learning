import "./App.css";
import {useState} from "react";

// const [firstCity, second] = ["Toronto", "New York", "Los Angeles", "Chicago"];
// console.log(firstCity); // Toronto
// console.log(second); // New York

function App() { // destructuring the library prop from the props object by reaching in and grabbing it by its key
  const [emotion, setEmotion] = useState("happy") // returns an array with two elements: the current state value and a function that lets you update it
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <buttton onClick={() => setEmotion("frustrated")}>frustrated</buttton> {/* call setEmotion to update the state value to a new state value like "frustrated"
       */}
      <buttton onClick={() => setEmotion("excited")}>excited</buttton>
      <buttton onClick={() => setEmotion("sad")}>sad</buttton>
    </div>
  );
}

export default App;
