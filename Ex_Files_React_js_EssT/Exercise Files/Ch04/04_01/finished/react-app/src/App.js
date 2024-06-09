import "./App.css";

const [firstCity, second] = ["Toronto", "New York", "Los Angeles", "Chicago"];
console.log(firstCity); // Toronto
console.log(second); // New York

function App({ library }) { // destructuring the library prop from the props object by reaching in and grabbing it by its key
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
