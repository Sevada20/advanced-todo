import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/todos/actions";
import styles from "./TodoForm.module.css";

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({ text: inputText, date }));
    setInputText("");
  };
  return (
    <div className={styles.todoForm}>
      <h3>New Task</h3>
      <form onSubmit={formSubmitHandler}>
        <input
          className={styles.todoFormInput}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Type here"
        />
        <input
          className={styles.todoFormInputLower}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
        <button className={styles.todoFormButtonSubmit} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
export default TodoForm;
