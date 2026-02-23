
export type TaskStatus = 'pending' | 'in-progress' | 'completed'; //a union type. It limits the 'status' value to only 1 of these 3 string values, nothing else. 
                                                                  // if you try to set a status of 'done'  for example, TypeScript will throw an error.
                                                                  //'export' = makes this type available to be imported to other files
                                                                  // 'type' = creates a reusable name for a TypeScript type
                                                                  //'TaskStatus' = the name we're giving this type

// The Task interface:
export interface Task { //'interface' =  defines the shape of an object, in this case that of 'Task'
  id: string;           // declares that every task must have an id of 'string' data type. for example '1' or '167'
  title: string;        // ""        ""   ""    ""   "" also have a title of 'string' data type.
  description: string;  // ""        ""   ""    ""   "" also have a description of 'string' data type.
  status: TaskStatus;   // ""        ""   ""    ""   "" also have a status of alias type 'TaskStatus', which as defined above can only be either 'pending', 'in-progress', or 'completed'.
  priority: 'low' | 'medium' | 'high'; // ""        ""   ""    ""   "" also have a priority 'union' type of either 'low', 'medium', 'high'. No alias type assigned here for comaprison purposes.
  dueDate: string;      // ""        ""   ""    ""   "" also have a 'due date' of 'string' data type. For example "2025-2-22"
}

// The TaskListProps interface:
export interface TaskListProps {  // Defines what props the 'TaskList' component expects to receive. 'export' makes this interface available to any component that wants to import it.
  tasks: Task[]; // this 'tasks prop' is an 'array' of 'Task objects'
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void; //this is a 'function prop' called 'onStatusChange' that has 2 type params that take arguments, that return nothing.
  onDelete: (taskId: string) => void; // another 'function prop' called 'onDelete' that takes a 'taskId' argument and returns nothing.
}

//The TaskItemProps interface:
export interface TaskItemProps { // Defines what props the 'TaskItem' component expects to receive. 'export' makes this interface available to any component that wants to import it.
  task: Task; // this 'tasks prop' is for a SINGLE Task object (no array this time).
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void; // same as the above props. They get passed down from the parent component (TaskList) to each individual task item (each TaskItem component that gets rendered inside TaskList).
  onDelete: (taskId: string) => void;
}

//The TaskFilterProps interface:
export interface TaskFilterProps { 
  onFilterChange: (filters: {      // this is a function prop called 'onFilterChange' ... that takes a 'filters' object made up of 2 optional properties...
    status?: TaskStatus;           // where you can filter by 'status'...
    priority?: 'low' | 'medium' | 'high';  // or 'priority' OR  both, OR neither
  }) => void;                       // function prop 'onFilterChange' returns nothing
}

//These 'types' act as contracts that cause TypeScript to warn you immediately if you try to use a component incorrectly or pass the wrong kind of data


