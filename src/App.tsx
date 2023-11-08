import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout";
import SubTodoList from "./components/todoList/todoItem/subTodoList/SubTodoList";
import styles from "./App.module.css";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.appContainer}>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/todo/:id" element={<SubTodoList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
