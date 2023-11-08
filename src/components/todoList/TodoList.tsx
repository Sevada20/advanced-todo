import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types/reduxTypes";
import TodoItem from "./todoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todoList);

  return (
    <div className={styles.todoListContainer}>
      <h2>dates</h2>
      {todos.length
        ? todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                date={todo.date}
                id={todo.id}
                count={todo.count}
              />
            );
          })
        : "No Todos"}
    </div>
  );
};

export default TodoList;
