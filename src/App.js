import React, { useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import Context from "./context";
import AddTodo from "./TodoList/AddTodo";
import { Preloader } from "./Preloader";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([true]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
					setTodos(todos);
					setIsLoading(false)
        }, 2000);
      });
  }, []);

  function changeTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (title) => {
    setTodos(
      todos.concat({
        id: Date.now(),
        completed: false,
        title,
      })
    );
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React Tutorial</h1>
        <AddTodo onCreate={addTodoItem} />
        {isLoading && <Preloader />}
        {todos.length ? (
          <TodoList todos={todos} onChange={changeTodo} />
        ) : isLoading ? null : (
          <b>Empty list</b>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
