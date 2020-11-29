import React from "react";
import TodoList from "./TodoList/TodoList";

let todos = [
	{id: 1, completed: false, title: 'Buy fruits'},
	{id: 2, completed: false, title: 'Buy vegetables'},
	{id: 3, completed: false, title: 'Buy beverages'}
]
	

function App() {
  return (
    <div className="wrapper">
      <h1>React Tutorial</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
