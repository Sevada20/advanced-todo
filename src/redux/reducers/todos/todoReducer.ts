import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "../../../types/componentsTypes";
import { ActionType } from "../../../types/reduxTypes";

const DELETE_SUB_TODO_ITEM = "DELETE_SUBTODOITEM";
const DELETE_TODO_ITEM = "DELETE_TODOITEM";
const ADD_TODO = "ADD_TODO";
const UPDATE_SUB_TODO_ITEM = "UPDATE_SUB_TODO_ITEM";
const todosReducer = (
  state = { todoList: [] as TodoItem[] },
  action: ActionType
) => {
  switch (action.type) {
    case ADD_TODO:
      const itemFound = state.todoList.find(
        (item) => item.date === action.payload.date
      );
      if (itemFound) {
        return {
          ...state,
          todoList: state.todoList.map((item) => {
            if (item.id === itemFound.id) {
              return {
                ...item,
                subTodo: [
                  ...item.subTodo,
                  {
                    id: uuidv4(),
                    date: action.payload.date,
                    text: action.payload.text,
                  },
                ],
                count: (item.count += 1),
              };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          todoList: [
            ...state.todoList,
            {
              id: uuidv4(),
              text: action.payload.text,
              date: action.payload.date,
              count: 1,
              subTodo: [
                {
                  id: uuidv4(),
                  text: action.payload.text,
                  date: action.payload.date,
                },
              ],
            },
          ],
        };
      }
    case DELETE_TODO_ITEM:
      return {
        ...state,
        todoList: state.todoList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case DELETE_SUB_TODO_ITEM:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.payload.todoItemId) {
            return {
              ...item,
              count: (item.count -= 1),
              subTodo: item.subTodo.filter((item) => {
                return item.id !== action.payload.subTodoId;
              }),
            };
          }
          return item;
        }),
      };
    case UPDATE_SUB_TODO_ITEM:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.payload.todoItemId) {
            return {
              ...item,
              subTodo: item.subTodo.map((subTodoItem) => {
                if (subTodoItem.id === action.payload.subTodoItemId) {
                  return {
                    ...subTodoItem,
                    text: action.payload.text,
                  };
                }
                return subTodoItem;
              }),
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default todosReducer;
