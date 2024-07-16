import { useState, useEffect } from "react";

import { ITodo } from "./global/types/todo.types";
import { FilterType } from "./global/types/filter.types";
import { Filter, TodoForm, TodoList } from "./components";

import { Container, GlobalStyle } from "./styles";

export default function App() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [filteredTodos, setFilteredTodos] = useState<Array<ITodo>>(todos);

  function addTodo(title: string, description: string): void {
    setTodos((state) => {
      const hasTitle = state.some((todo) => todo.title === title);

      if (hasTitle) return state;

      const addedTodos = [
        ...todos,
        { id: Date.now(), title, description, completed: false },
      ];
      localStorage.setItem("todos", JSON.stringify(addedTodos));

      return addedTodos;
    });
  }

  function toggleComplete(id: number) {
    const completedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    localStorage.setItem("todos", JSON.stringify(completedTodos));

    setTodos(completedTodos);
  }

  function removeTodo(id: number) {
    const deletedTodos = todos.filter((todo) => todo.id !== id);

    localStorage.setItem("todos", JSON.stringify(deletedTodos));

    setTodos(deletedTodos);
  }

  function editTodo(id: number, newTitle: string, newDescription?: string) {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle, description: newDescription };
      }

      return todo;
    });

    localStorage.setItem("todos", JSON.stringify(updatedTodo));

    setTodos(updatedTodo);
  }

  function sortByTitle() {
    const sortedTodos = todos.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 0;
      return 1;
    });

    localStorage.setItem("todos", JSON.stringify(sortedTodos));

    setTodos(sortedTodos);
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos") || "")
      : [];
    setTodos(storedTodos);

    const storedFilter = localStorage
      .getItem("filter")
      ?.toString() as FilterType;

    setFilter(storedFilter);
  }, []);

  useEffect(() => {
    setFilteredTodos(
      todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "incomplete") return !todo.completed;
        if (filter === "all") return todo;
        return false;
      })
    );
  }, [todos, filteredTodos]);

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
