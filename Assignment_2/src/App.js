import React from "react";
import Button from "./components/Button/Button";
import TextField from "./components/TextField/TextField";
import "./App.css";

function App() {
  const [disabled, setDisabled] = React.useState(true);
  
  return (
    <div className="App">
      <TextField setDisabled={setDisabled}/>
      <Button disabled={disabled}/>
    </div>
  );
}

export default App;