import './App.css'; //adding styles

import { useState } from 'react';  //Imports the types we need from 'index.ts'

import type { Task, TaskStatus } from './types';  //Imports the 'Task' and 'TaskStatus' types from 'index.ts'

import TaskList from './components/TaskList/TaskList'; //Imports the 'TaskList' component
                                                      // Note we only import 'TaskList' here  we don't need to import 'TaskItem' or 'TaskFilter' directly because 'TaskList' already handles those internally
const initialTasks: Task[] = [ //': Task[]' = TypeScript checks that every item in this array matches the Task interface.
                                //'[' = starts the array of tasks.  
             
  //Every property matches exactly what we defined in the Task interface in index.ts
  //This data lives outside the App function because it never changes it's just the starting data
  {
    id: '1',
    title: 'Finish Per Scholas Training',
    description: 'Cannot apply to work until this is completed',
    status: 'pending',
    priority: 'high',
    dueDate: '2026-03-27',
  },
  {
    id: '2',
    title: 'Apply for Jobs that involve newer skills',
    description: 'Update resume, coverletter, LinkedIn profile, GitHUb repo',
    status: 'completed',
    priority: 'medium',
    dueDate: '2026-03-28',
  },
  {
    id: '3',
    title: 'Prepare for job interviews',
    description: 'go over questions; do mock interviews',
    status: 'in-progress',
    priority: 'low',
    dueDate: '2026-04-28',
  },
];  //Closes the initialTasks array

function App() {   //Defines the 'App' component (aka, the root component), the top of our entire component tree

const [tasks, setTasks] = useState<Task[]>(initialTasks); //Creates a 'state' variable called 'tasks' to hold the list of tasks
                                                          // 'setTasks' = the function used to update tasks
                                                          // 'useState<Task[]>' = ITC the state is an array of Task objects
                                                          // '(initialTasks)' = the initial value is the 'initialTasks' array we defined above

const handleStatusChange = (taskId: string, newStatus: TaskStatus) => { //Defines the 'handleStatusChange' function
                                                                        // This is the function that has been referenced all the way down through TaskList and TaskItem
                                                                        // Takes 2 arguments, the 'taskId' of the task to update and the 'newStatus' to set it to.

                                                                        
setTasks(tasks.map((task) =>                                        //'setTasks' = calls the function to update the tasks state
      task.id === taskId ? { ...task, status: newStatus } : task    // 'tasks.map((task) =>' = loops through every task
    ));                                                           // 'task.id === taskId ?' = checks if this is the task we want to update
                                                                  //'{ ...task, status: newStatus }' = if yes, creates a new task object with all the same properties (...task) but with the status replaced with newStatus
                                                                  //': task' = if no, just return the task unchanged
                                                                  //The '?' and ':' here is a ternary operator = a shorthand for if/else
}

const handleDelete = (taskId: string) => {                        //Defines the actual handleDelete function
    setTasks(tasks.filter((task) => task.id !== taskId));         //'tasks.filter((task) => task.id !== taskId)' = creates a new array with every task except the one with the matching taskId
  };                                                              //'setTasks' = updates the tasks state with this new filtered array
                                                                  //The deleted task simply doesn't make it into the new array

return (                                                        //Returns JSX wrapped in a div
    <div>
      <h1>Task Manager</h1>


<TaskList                                                     //Renders the TaskList component
        tasks={tasks}                                         //'tasks={tasks}' — passes the current tasks state down to TaskList
        onStatusChange={handleStatusChange}                   // 'onStatusChange={handleStatusChange}' — passes the actual status change function down
        onDelete={handleDelete}                               // 'onDelete={handleDelete}' — passes the actual delete function down. This is where the prop drilling starts — these will be passed further down to TaskItem
      />                                                       
      
</div>
  );
}

export default App;   //makes this COMPONENT available to be imported to other files