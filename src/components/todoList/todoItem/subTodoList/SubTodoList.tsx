import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../../../types/reduxTypes";
import { SubTodoItemType, TodoItem } from "../../../../types/componentsTypes";
import SubTodoItem from "./subTodoItem/SubTodoItem";
import styles from "./SubTodoList.module.css";
const SubTodoList: React.FC = () => {
  const params = useParams();
  const todos = useSelector((state: RootState) => state.todos.todoList);
  const findItemTodos = todos.find((item: TodoItem) => item.id === params.id);

  return (
    <div className={styles.subTodoListContainer}>
      <Link to="/">Go Back</Link>
      <div className={styles.dataContainer}>
        <h4>Date</h4>
        <h4>Task Name</h4>
      </div>
      {findItemTodos?.subTodo.map((subTodoItem: SubTodoItemType) => {
        return (
          <SubTodoItem
            key={subTodoItem.id}
            id={subTodoItem.id}
            text={subTodoItem.text}
            date={subTodoItem.date}
          />
        );
      })}
    </div>
  );
};

export default SubTodoList;
