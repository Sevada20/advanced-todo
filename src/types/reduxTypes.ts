import { TodoItem } from "./componentsTypes";

export type RootState = {
  todos: {
    todoList: TodoItem[];
  };
};
export type ActionType = {
  type: string;
  payload: any;
};
