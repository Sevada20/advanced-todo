import { combineReducers, createStore } from "redux";
import todosReducer from "./reducers/todos/todoReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});
const store = createStore(rootReducer);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export default store;
