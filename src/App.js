import React, { useState } from "react";
import "./App.css";

let globalID = 0;

function App() {
  const [task, setTasks] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault();
    setTodos((prevTodos) => {
      setTasks("");
      return [...prevTodos, { todo: task, id: globalID++ }];
    });
  }

  // function tryToCheckForEnterEvent(e) {
  //   if (e.keyCode === 13) {
  //     createTodo();
  //   }
  // }

  function deleteItem(itemID) {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== itemID));
  }

  return (
    <div>
      <h1>Best ToDo App Ever</h1>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTasks(e.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>

      <ul>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>{item.todo}</li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
