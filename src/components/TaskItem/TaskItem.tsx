import type { TaskItemProps, TaskStatus } from '../../types';  //imports code from interfaces(types) TaskItemProps, TaskStatus of 'index.tx'

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) { //function 'TaskItem' = defines a function called TaskItem, which is the component
                                                                       //{ task, onStatusChange, onDelete } = destructuring the 'props' object of 'TaskItemProps' type/interface {similar to a 'class' does in JS.}
                                                                       // ': TaskItemProps' = tells TypeScript these props must must have exactly the properties defined in TaskItemProps interface defined in index.ts
return (  //every React component MUST return 'JSX' (the HTML-like code).
    <div> {/*a wrapper element that wraps everything inside the component*/}
    <h3>{task.title}</h3>  {/*displays the 'title' value of 'task' prop (aka 'Task') inside a heading. since 'task.title' is JS/TS The {} curly braces let us use JS/TS values inside JSX*/}
    <p>{task.description}</p>  {/*displays the 'description' value of 'task' prop (aka 'Task') inside a paragraph. since 'task.description' is JS/TS The {} curly braces let us use JS/TS values inside JSX*/}
    <p>Status: {task.status}</p> {/*displays the word "Status:" followed by the actual 'status' value of the 'task' prop (aka 'TaskStatus' - 'pending' | 'in-progress' | 'completed')*/}
    <p>Priority: {task.priority}</p>  {/*displays the word "Priority:" followed by the actual 'priority' value of the 'task' prop (aka 'Task' - 'low' | 'medium' | 'high')*/}
    <p>Due Date: {task.dueDate}</p> {/*displays the word "Due Date:" followed by the actual 'dueDate' value of the 'task' prop (aka 'Task')*/}

    <select //starts the dropdown menu for 'TaskSatus'
        value={task.status} // React controls its value (not the browser), meaning that it's a 'controlled' component. Thus it sets the currently selected option to match the task's current status.
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)} // 'onChange' = event triggered every time the user picks a different option from the dropdown.
                                                                                // '(e)' = the event object that stores info about most recent event. More specifically in this case stores info...
                                                                                // .. about the change event that just happened on the dropdown.
                                                                                // The info being referred to here is e.target.value
                                                                                // Where:
                                                                                // - 'e.target' - refers to the 'actual dropdown element' that triggered the event
                                                                                // - `e.target.value` - refers to the 'new value the user just selected' from the dropdown
                                                                                // 'as TaskStatus' - tells TS  to treat this value as a 'TaskStatus' type bc TS doesn't automatically know if the dropdown value is a valid 'TaskStatus'
                                                                                // 'onStatusChange(task.id, e.target.value as TaskStatus)' - calls the function 'onStatusChange' passed down from the parent (TaskList), sending the 'task's id' and the 'new status'
    >

     {/*//these are the three choices inside the dropdown */}  
    <option value="pending">Pending</option>
    <option value="in-progress">In Progress</option>
    <option value="completed">Completed</option>

    {/* closes the dropdown element */}
    </select>  

    <button onClick={() => onDelete(task.id)}>Delete</button>  {/* 'onClick' - is triggered when the user clicks the button
                                                                '() => onDelete(task.id)' - an arrow function that calls 'onDelete' param with the task's id when clicked */}
    {/*closes wrapper element that wraps everything inside the component*/} 
    </div> 
    )
}

export default TaskItem;  //makes this COMPONENT available to be imported to other files
