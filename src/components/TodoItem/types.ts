import { IEditTodo, ITodo } from "../../global/types/todo.types";

export interface ITodoItemProps {
  todo: ITodo;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (data: IEditTodo) => void;
}

export interface ITodoItemStyleProps {
  completed?: string;
  delete?: string;
}
