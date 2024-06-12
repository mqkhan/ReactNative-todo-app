import React, { createContext, useState, useContext } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: "1", title: "Todo 1" },
    { id: "2", title: "Todo 2" },
    { id: "3", title: "Todo 3" },
  ]);

  function addTodo(title) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: (prevTodos.length + 1).toString(), title },
    ]);
  }

  function markAsDone(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, markAsDone, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
