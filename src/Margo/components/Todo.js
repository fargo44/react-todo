import React from "react";

function Todo({ todo, done, completeTodo, removeTodo }) {
  if(done) {
    return (
      <div
      className="todo"
      style={{ textDecoration: done ? "line-through" : "" }}
    >
      {todo.description}
      <div>
        <button onClick={() => removeTodo(todo.description)}>remove</button>
      </div>
    </div>
    )
  } else {
    return (
      <div
        className="todo"
        style={{ textDecoration: done ? "line-through" : "" }}
      >
        {todo.description}
        <div>
          <button onClick={() => completeTodo(todo.description)}>complete</button>
          <button onClick={() => removeTodo(todo.description)}>remove</button>
        </div>
      </div>
    );
  }
}

export default Todo;