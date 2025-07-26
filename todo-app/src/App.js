import React, { useState } from "react";
import TodoForm from "./Mycomponents/TodoForm";
import Todo from "./Mycomponents/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
    setMessage("✅ Task added!");
    setTimeout(() => setMessage(""), 2000);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    setMessage(
      newTodos[index].completed
        ? "✅ Task marked as completed!"
        : "↩️ Task marked as incomplete!"
    );
    setTimeout(() => setMessage(""), 2000);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setMessage("❌ Task deleted!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="app">
      <h1>📝 ToDo App</h1>
      <TodoForm addTodo={addTodo} />

      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </div>

      {/* Show message here */}
      {message && <span className="status-message">{message}</span>}
    </div>
  );
}

export default App;
