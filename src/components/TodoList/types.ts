import { IEditTodo, ITodo } from "../../global/types/todo.types";

export interface ITodoListProps {
  todos: Array<ITodo>;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (data: IEditTodo) => void;
}
