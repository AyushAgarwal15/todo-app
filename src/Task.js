export function Task({ task, onDelete }) {
  return (
    <div className="task">
      <span>{task.task}</span>
      <span className="delete-icon" onClick={() => onDelete(task.id)}>
        X
      </span>
    </div>
  );
}
