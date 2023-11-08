const DELETE_SUB_TODO_ITEM = "DELETE_SUBTODOITEM";
const DELETE_TODO_ITEM = "DELETE_TODOITEM";
const ADD_TODO = "ADD_TODO";
const UPDATE_SUB_TODO_ITEM = "UPDATE_SUB_TODO_ITEM";

export const addTodo = (payload: { date: string; text: string }) => ({
  type: ADD_TODO,
  payload: payload,
});
export const deleteSubTodoItem = (payload: {
  todoItemId: string;
  subTodoId: string;
}) => ({
  type: DELETE_SUB_TODO_ITEM,
  payload: payload,
});
export const deleteTodoItem = (payload: { id: string }) => ({
  type: DELETE_TODO_ITEM,
  payload: payload,
});
export const updateSubTodoItem = (payload: {
  todoItemId: string;
  subTodoItemId: string;
  text: string;
}) => ({
  type: UPDATE_SUB_TODO_ITEM,
  payload,
});
