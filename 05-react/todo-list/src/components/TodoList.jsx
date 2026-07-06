import './TodoList.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    // ===== STATE MANAGEMENT =====
    // useState is a React Hook that lets us store and update data in our component
    // This data is called "state" - when it changes, React re-renders the component automatically

    // State #1: Stores the list of all tasks
    // task = the current list of tasks
    // setTask = the function we use to update the task list
    // [] = the initial value (starts as an empty array)
    const [task, setTask] = useState([]);

    // State #2: Stores what the user is currently typing in the input field
    // newTask = the current text in the input field
    // setNewTask = the function we use to update what's in the input field
    // '' = the initial value (starts as an empty string)
    const [newTask, setNewTask] = useState('');

    // ===== FUNCTION: Add a new task to the list =====
    // This function runs when the user clicks the "Add Task" button
    function addTask() {
        // Step 1: Check if the input field is empty (after removing spaces)
        // .trim() removes spaces from the beginning and end of a string
        // If the field is empty, we don't want to add an empty task, so we exit the function
        if (newTask.trim() === '') {
            return; // Exit the function, don't add anything
        }

        // Step 2: Create a new task object with the text and a unique ID
        // We're making an object like this:
        // { task: "Buy groceries", id: "abc-123-def-456" }
        const newTaskObject = {
            task: newTask, // The task text that the user typed
            id: uuidv4(), // A unique ID (uuid generates random IDs like abc-123...)
        };

        // Step 3: Add the new task to the list
        // [...task, newTaskObject] uses the "spread operator" (...)
        // What it does: Make a copy of the old task list AND add the new task at the end
        // Example: if task = [A, B], then [...task, C] = [A, B, C]
        setTask([...task, newTaskObject]);

        // Step 4: Clear the input field
        // We set newTask back to an empty string so the user can type a new task
        setNewTask('');
    }

    // ===== FUNCTION: Update the input field as the user types =====
    // This function runs every time the user types a character in the input field
    // event.target = the input field element
    // event.target.value = whatever text is currently in that input field
    function updateTask(event) {
        // We take whatever the user just typed and save it to state
        // This keeps React's state in sync with what the user sees on the screen
        setNewTask(event.target.value);
    }

    // ===== FUNCTION: Prevent page reload on form submit =====
    // By default, HTML forms reload the page when you submit them
    // We DON'T want the page to reload, so we use event.preventDefault()
    function handleSubmit(event) {
        // preventDefault() stops the browser from doing its default behavior (reloading the page)
        event.preventDefault();
    }

    function markDone(taskId) {
        const updatedTasks = task.map((t) => {
            if (t.id === taskId) {
                // This is the task we clicked - toggle it
                return { ...t, completed: !t.completed };
            } else {
                // Other tasks - keep them unchanged
                return t;
            }
        });
        setTask(updatedTasks);
    }

    function removeTask(taskId) {
        // Keep only tasks where ID ≠ the one being deleted
        const updatedTasks = task.filter((t) => t.id !== taskId);
        setTask(updatedTasks);
    }

    // ===== WHAT THE COMPONENT RENDERS =====
    return (
        <div className="container">
            {/* Title Section */}
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center fw-bold display-5 my-3 mb-4">TO-DO List</h4>
                </div>
            </div>

            {/* Input Section - where user types new tasks */}
            <div className="row">
                {/*
                  The <form> has onSubmit={handleSubmit}
                  This means when the form is submitted, handleSubmit() runs
                  which prevents the page from reloading
                */}
                <form
                    className="col-md-5 d-flex justify-content-center align-items-center my-4 px-0"
                    onSubmit={handleSubmit}
                >
                    {/*
                      The Input Field
                      - placeholder = text that shows when the field is empty
                      - value={newTask} = the input shows what's stored in the newTask state
                      - onChange={updateTask} = every time the user types, updateTask() runs
                      - autoFocus = the cursor starts in this field automatically
                    */}
                    <input
                        type="text"
                        placeholder="Add a task..."
                        className="form-control form-control-lg css-input"
                        value={newTask}
                        onChange={updateTask}
                        autoFocus
                    />

                    {/*
                      The Add Task Button
                      - type="submit" = this button submits the form (triggers handleSubmit)
                      - onClick={addTask} = ALSO runs addTask() when clicked
                      Note: Both things happen:
                        1. onClick runs addTask()
                        2. type="submit" triggers the form's onSubmit (which prevents page reload)
                    */}
                    <button className="btn btn-success px-3 text-nowrap" type="submit" onClick={addTask}>
                        Add Task
                    </button>
                </form>
            </div>

            {/* Task List Section - displays all tasks */}
            <div className="row">
                <div className="col">
                    <ul>
                        {/*
                          .map() is a JavaScript function that loops through an array
                          For EACH task in the task array, we create an <li> element

                          (t) => ( ... ) is an arrow function - a short way to write functions

                          What's happening:
                          - Loop through each task in the task array
                          - For each task (called 't'), create a list item
                          - key={t.id} helps React know which items changed (required for lists)
                          - {t.task.charAt(0).toUpperCase() + t.task.slice(1)}
                            This capitalizes the first letter:
                            'buy groceries' becomes 'Buy groceries'
                            - charAt(0) = gets the first character ('b')
                            - toUpperCase() = makes it uppercase ('B')
                            - slice(1) = gets everything from position 1 onwards ('uy groceries')
                            - + combines them: 'B' + 'uy groceries' = 'Buy groceries'
                        */}
                        {task.map((t) => (
                            // Using a unique ID as key and Capitalizing the First Letter and then inserting into a list
                            <li key={t.id}>
                                {t.task.charAt(0).toUpperCase() + t.task.slice(1)}

                                <button
                                    className="btn btn-outline-secondary mx-4"
                                    onClick={() => {
                                        markCompleted(t.id);
                                    }}
                                >
                                    Mark as Completed
                                </button>

                                <button className="btn btn-danger mx-4" onClick={() => removeTask(t.id)}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
