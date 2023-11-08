import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodoItem } from "../../../redux/reducers/todos/actions";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  date: string;
  id: string;
  count: number;
};

const TodoItem: React.FC<TodoItemProps> = ({ date, id, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.rootContainer}>
      <div className={styles.todoItemContainer}>
        <Link to={`/todo/${id}`} className={styles.todoItemLink}>
          <span className={styles.todoItemFirstSpan}>{date}</span>
          <span>({count})</span>
          <AiFillCaretRight className={styles.iconRight} />
        </Link>
      </div>
      <button onClick={() => dispatch(deleteTodoItem({ id }))}>Delete</button>
    </div>
  );
};

export default TodoItem;
