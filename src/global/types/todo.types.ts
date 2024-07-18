export interface ITodo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export type IEditTodo = {
  id: number;
  newTitle: string;
  newDescription?: string;
};
