import "./App.css";
import { useReducer, useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <input 
      type="checkbox" 
      value={checked} 
      onChange={() => 
        setChecked((checked) => !checked)
      } /> {/* the value of the checkbox is set to the value of the checked state variable. When the checkbox is clicked, the onChange event handler is triggered and the setChecked function is called with a callback function that toggles the value of the checked state variable */}
      <label>{checked ? "Checked" : "Not Checked"}</label>
      
    </div>
  );
}

export default App;
