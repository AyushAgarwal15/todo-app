import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Header } from "./Header";
import { InputTask } from "./InputTask";
import { TasksContainer } from "./TasksContainer";

export default function App() {
  // taskcontainer state
  const [tasksArr, setTasksArr] = useState([]);

  // task input state
  const [task, setTask] = useState("");

  function handleAddTask(e, task) {
    e.preventDefault();
    if (task) {
      setTasksArr((prevArr) => [...prevArr, { task, id: uuid() }]);
    }
    setTask("");
  }

  function handleDelete(id) {
    setTasksArr(tasksArr.filter((task) => task.id !== id));
  }

  return (
    <div className="app">
      <div className="header-input-container">
        <Header />
        <InputTask task={task} setTask={setTask} onAddTask={handleAddTask} />
      </div>
      <TasksContainer tasksArr={tasksArr} onDelete={handleDelete} />
    </div>
  );
}
