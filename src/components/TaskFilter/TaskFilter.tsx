
import type { TaskFilterProps, TaskStatus } from '../../types';  // it imports the 'types' we need from 'index.ts'
                                                                 // be sure to prefix with 'type' to prevent error:
                                                                 //"...a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled." for both '"
function TaskFilter({ onFilterChange }: TaskFilterProps) { // Defines the TaskFilter component
                                                           // '{ onFilterChange }' = destructures the only prop this component receives
                                                           //  'TaskFilterProps' =  TypeScript check that prop is of type 'TaskFilterProps', IOWs that it matches 'TaskFilterProps' interface
return (                                        // signals the beginning of JSX that this component (TaskFilter) returns.

    <div>                                       {/*Wrapper element that groups both dropdowns together 'status' and 'priority' */}
    <select                                      // marks begnning of the 'status filter' dropdown
    onChange={(e) => onFilterChange({ status: e.target.value as TaskStatus })} //'onChange' = triggered when user selects a different 'status'
                                                                               // 'onFilterChange({ status: e.target.value as TaskStatus })' = calls the function passed down from the parent component (App.tsx), sending an object with the selected status.
                                                                               // 'App.tsx' IS WHERE 'filtering logic' lives.
                                                                               // This makes sense because 'App.tsx' is where all the 'tasks' data is stored and needs to know when 'filters' change so it can update which tasks are displayed.
                                                                               // there is no 'value={task.status}' here like in TaskItem, bc this dropdown is UNCONTROLLED, meaning we don't need to track its current value in React
    >
        <option value="">All Statuses</option>  {/*The default option with an empty string value, meaning no filter is applied*/}
        <option value="pending">Pending</option> {/* status filter option */}
        <option value="in-progress">In Progress</option> {/* status filter option */}
        <option value="completed">Completed</option> {/* status filter option */}
    </select>

    
    <select                                         // marks begnning of the 'priority filter' dropdown
  onChange={(e) => onFilterChange({ priority: e.target.value as 'low' | 'medium' | 'high' })}  //'onFilterChange' = triggered when user selects a different 'priority'
                                                                               // 'onFilterChange({ priority: e.target.value as 'low' | 'medium' | 'high' })' = calls the function passed down from the parent component (App.tsx).
                                                                               // ...sending an object with the selected priority value, typed as 'low' | 'medium' | 'high' so TypeScript knows it's a valid priority
    >
        <option value="">All Priorities</option>  {/*The default option with an empty string value, meaning no filter is applied*/}
        <option value="low">Low</option> {/* priority filter option */}
        <option value="medium">Medium</option> {/* priority filter option */}
        <option value="high">High</option> {/* priority filter option */}
    </select>

    </div>

);
}

export default TaskFilter; //makes this COMPONENT available to be imported to other files


/*
VIP Note:
- One key difference from TaskItem worth noting — when onFilterChange is called it sends an object with either status or priority:
*
typescript{ status: e.target.value }  // from first dropdown
*
{ priority: e.target.value } // from second dropdown
if you recall the '?' that was applied to those properties in TaskFilterProps That's why they're optional because you might only be filtering by one at a time!
*/





































/* 
- this component is simpler than TaskItem because:
-- It only receives one prop (onFilterChange) instead of three
-- It doesn't display any task data
-- Its only job is to give the user two dropdowns to filter by status and priority
*/