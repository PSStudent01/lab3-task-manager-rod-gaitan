# 
Task Manager
- This is a task management application built with React and TypeScript 
- its purpose is to implement
-- dynamic list rendering, 
-- filtering, 
--and conditional rendering.

#
Built With:
- React
- TypeScript
- Vite
- CSS

#
Installation:
Vite Server:
Install:
- off of my mod-9 folder:
-- [npm create vite@latest lab3-task-manager-rod-gaitan -- --template react-ts]
-- [Enter]
-- for 'Use Vite 8 beta (Experimental)?:' [NO]
-- for 'Install with npm and start now?' [YES]
- Open browser to 'http://localhost:5173/'

Optional:
- if 'node_modules' folder that contains dependencies was NOT installed:
-- [cd lab3-task-manager-rod-gaitan]
-- [npm install]

To Stop Vite Server:
- [Ctrl + c]

To Run Vite Server:
- [cd lab3-task-manager-rod-gaitan]
- [npm run dev]
- Open your browser to 'http://localhost:5173'

#
Components

##
TaskItem
Displays a single task with the following information:
- Title
- Description
- Status (shown as a colored left border)
- Priority (shown in color-coded text)
- Due Date
- A dropdown to change the task status
- A delete button to remove the task

##
TaskFilter
Displays two dropdowns at the top of the task list:
- Filter by Status (All, Pending, In Progress, Completed)
- Filter by Priority (All, Low, Medium, High)

##
TaskList
Manages and displays the full list of tasks. It:
- Renders a TaskFilter component at the top
- Renders a TaskItem for each task
- Handles filtering logic based on status and priority


## 
Visual Indicators
Status Indicators:
- Pending = Yellow left border
- In Progress = Blue left border
- Completed = Green left border, slightly faded

Priority Indicators:
- High = Red bold text
- Medium = Orange bold text
- Low = Green bold text
