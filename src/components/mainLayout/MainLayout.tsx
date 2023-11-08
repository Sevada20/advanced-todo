import React from "react";
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";

const MainLayout = () => {
  return (
    <div>
      <h2>To do list</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default MainLayout;
