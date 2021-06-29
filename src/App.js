import React from "react";
import Todo from "./Margo/Todo";
import TodoForm from "./Margo/Form"
import { render } from "react-dom"
import "./App.css";

const concept = "world";

const App = () => {
  return <div> Hello {concept}</div>
};

render(<App />, document.getElementById("root"));


export default App;