import React from "react";
import Collapse from "./components/Collapse/Collapse";
import Table from "./components/Table/Table";
import UserProvider from "./contexts/UserProvider";

function App() {
  
  return (
    <div className="App">
      <UserProvider>
        <Collapse/>
        <Table/>
      </UserProvider>
    </div>
  )
}

export default App;