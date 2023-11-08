export type SubTodoItemType = {
  id: string;
  date: string;
  text: string;
};
export type TodoItem = {
  id: string;
  text: string;
  date: string;
  count: number;
  subTodo: SubTodoItemType[] | [];
};
