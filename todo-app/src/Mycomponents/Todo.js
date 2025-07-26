import React from "react";

function Todo({ todo, index, toggleComplete, removeTodo }) {
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <span>{todo.text}</span>
      <div className="buttons">
        <button onClick={() => toggleComplete(index)}>✅</button>
        <button onClick={() => removeTodo(index)}>❌</button>
      </div>
    </div>
  );
}

export default Todo;
