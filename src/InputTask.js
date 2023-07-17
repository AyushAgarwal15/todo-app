export function InputTask({ task, setTask, onAddTask }) {
  return (
    <div className="input-button-container">
      <input
        type="text"
        placeholder="Enter Your Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={(e) => onAddTask(e, task)}>Add Task</button>
    </div>
  );
}
