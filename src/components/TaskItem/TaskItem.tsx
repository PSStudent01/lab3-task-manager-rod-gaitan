import type { TaskItemProps, TaskStatus } from '../../types';  //imports code from interfaces(types) TaskItemProps, TaskStatus of 'index.tx'

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) { //function 'TaskItem' = defines a function called TaskItem, which is the component
                                                                       //{ task, onStatusChange, onDelete } = destructuring the 'props' object of 'TaskItemProps' type/interface {similar to a 'class' does in JS.}
                                                                       // ': TaskItemProps' = tells TypeScript these props must must have exactly the properties defined in TaskItemProps interface defined in index.ts

return (
  <div className={`task-item status-${task.status}`}>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>Status: {task.status}</p>
    <p className={`priority-${task.priority}`}>Priority: {task.priority}</p>
    <p>Due Date: {task.dueDate}</p>

    <select
      value={task.status}
      onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
    >
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>

    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
);



}

export default TaskItem;  //makes this COMPONENT available to be imported to other files
