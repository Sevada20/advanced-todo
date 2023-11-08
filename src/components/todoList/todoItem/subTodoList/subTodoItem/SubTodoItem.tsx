import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteSubTodoItem,
  updateSubTodoItem,
} from "../../../../../redux/reducers/todos/actions";
import styles from "./SubTodoItem.module.css";

interface SubTodoItemProps {
  date: string;
  text: string;
  id: string;
}

const SubTodoItem: React.FC<SubTodoItemProps> = ({ date, text, id }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [newTask, setNewTask] = React.useState<string>(text);
  const [showInputUpdateText, setShowInputUpdateText] =
    React.useState<boolean>(false);

  const handleUpdateClick = () => {
    params.id &&
      dispatch(
        updateSubTodoItem({
          todoItemId: params.id,
          subTodoItemId: id,
          text: newTask,
        })
      );
    setShowInputUpdateText(false);
  };
  const handleDeleteItemClick = () => {
    if (params.id)
      dispatch(deleteSubTodoItem({ todoItemId: params.id, subTodoId: id }));
  };

  return (
    <div className={styles.subTodoItemContainer}>
      <div style={{ marginTop: "25px" }}>
        <span>{date}</span>
      </div>
      <div className={styles.taskNameContainer}>
        {(showInputUpdateText && (
          <input type="text" onChange={(e) => setNewTask(e.target.value)} />
        )) || <span>{text}</span>}
      </div>
      <div className={styles.buttonContainer}>
        {(showInputUpdateText && (
          <button onClick={handleUpdateClick}>Update</button>
        )) || (
          <button onClick={() => setShowInputUpdateText(true)}>Modify</button>
        )}

        <button onClick={handleDeleteItemClick}>Delete</button>
      </div>
    </div>
  );
};

export default SubTodoItem;
