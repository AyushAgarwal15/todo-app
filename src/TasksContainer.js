import { Task } from "./Task";

export function TasksContainer({ tasksArr, onDelete }) {
  return (
    <div className="tasks-container">
      {tasksArr.map((task) => (
        <Task task={task} onDelete={onDelete} key={task.id} />
      ))}
    </div>
  );
}
