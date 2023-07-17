import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  // taskcontainer state
  const [tasksArr, setTasksArr] = useState([]);

  // task input state
  const [task, setTask] = useState("");

  function handleAddTask(task) {
    setTasksArr((prevArr) => [...prevArr, { task, id: uuid() }]);
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

function Header() {
  return (
    <h1 className="header">
      Get Things <span>Done!</span>
    </h1>
  );
}

function InputTask({ task, setTask, onAddTask }) {
  console.log(task);
  return (
    <form className="input-button-container" onSubmit={() => onAddTask(task)}>
      <input
        type="text"
        placeholder="Enter Your Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button>Add Task</button>
    </form>
  );
}

function TasksContainer({ tasksArr, onDelete }) {
  return (
    <div className="tasks-container">
      {tasksArr.map((task) => (
        <Task task={task} onDelete={onDelete} key={task.id} />
      ))}
    </div>
  );
}

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <span>{task.task}</span>
      <span className="delete-icon" onClick={() => onDelete(task.id)}>
        X
      </span>
    </div>
  );
}
