import { useState, useEffect } from "react";

import { ITodo } from "./global/types/todo.types";
import { FilterType } from "./global/types/filter.types";
import { Filter, TodoForm, TodoList } from "./components";

import { Container, GlobalStyle } from "./styles";

const getTodosFromStorage = (): Array<ITodo> => {
  const storedTodos = localStorage.getItem("todos");

  return storedTodos ? JSON.parse(storedTodos || "") : [];
};

const getFilterFromStorage = (): FilterType => {
  const storedFilter = localStorage.getItem("filter");
  return storedFilter ? JSON.parse(storedFilter) : "all";
};

export default function App() {
  const [filter, setFilter] = useState<FilterType>(() =>
    getFilterFromStorage()
  );
  const [todos, setTodos] = useState<Array<ITodo>>(() => getTodosFromStorage());

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    if (filter === "all") return todo;
    return false;
  });

  function addTodo(title: string, description: string): void {
    setTodos((state) => {
      const hasTitle = state.some((todo) => todo.title === title);

      if (hasTitle) return state;

      const addedTodos = [
        ...todos,
        { id: Date.now(), title, description, completed: false },
      ];

      return addedTodos;
    });
  }

  function toggleComplete(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id: number, newTitle: string, newDescription?: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle, description: newDescription }
          : todo
      )
    );
  }

  function sortByTitle() {
    setTodos((state) =>
      state
        .sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 0;
          return 1;
        })
        .map((items) => items)
    );
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);

  return (
    <Container>
      <GlobalStyle />
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} sortByTitle={sortByTitle} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </Container>
  );
}
