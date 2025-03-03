import { useState, useEffect } from "react";
import "./App.css";
import defaultTodoList from "./assets/defaultTodoList.json";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoLisct";
import { nanoid } from "nanoid";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedContacts = localStorage.getItem("saved-todo");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
		}
    return defaultTodoList;
  });


  const addTodo = (newTodo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-todo", JSON.stringify(todos));
  }, [todos]);

  const deleteUser = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };




  return (
    <div>
      <h1>Notebook</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteUser} />
    </div>
  );
}