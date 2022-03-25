import React from "react";
import Todoform from "./Componets/Todoform";
import "./styles.css";

function App() {
  return (
    <div className="todo-app">
      <h1 style={{ fontSize: "40px" }}>Todo App</h1>
      <Todoform />
    </div>
  );
}

export default App;
