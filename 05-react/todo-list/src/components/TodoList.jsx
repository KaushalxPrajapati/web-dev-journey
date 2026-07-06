import './TodoList.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    // State to store all todo items
    // Each task: { task: string, id: string, isDone: boolean }
    const [task, setTask] = useState([]);

    // State to store what user is typing in the input field
    const [newTodo, setNewTodo] = useState('');

    // Add a new task to the list
    function addTask() {
        if (newTodo.trim() === '') {
            return; // Don't add empty tasks
        }

        const newTaskObject = {
            task: newTodo,
            id: uuidv4(), // Unique ID for each task
            isDone: false, // New tasks start as not done
        };

        // Add new task to the list (immutable update)
        setTask([...task, newTaskObject]);
        setNewTodo(''); // Clear input field
    }

    // Update input field as user types
    function updateTask(event) {
        setNewTodo(event.target.value);
    }

    // Prevent form from reloading the page
    function handleSubmit(event) {
        event.preventDefault();
    }

    // Toggle task between Done and Undone
    function markDone(taskId) {
        const updatedTasks = task.map((t) => {
            if (t.id === taskId) {
                return {
                    ...t, // Copy all properties
                    isDone: !t.isDone, // Toggle true ↔ false
                };
            }
            return t; // Keep other tasks unchanged
        });

        setTask(updatedTasks);
    }

    // Delete a task from the list
    function removeTask(taskId) {
        const updatedTasks = task.filter((t) => t.id !== taskId);
        setTask(updatedTasks);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center fw-bold display-5 my-3 mb-4">TO-DO List</h4>
                </div>
            </div>

            {/* Add New Task Form */}
            <div className="row">
                <form
                    className="col-md-5 d-flex justify-content-center align-items-center my-4 px-0"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Add a task..."
                        className="form-control form-control-lg css-input"
                        value={newTodo}
                        onChange={updateTask}
                        autoFocus
                    />

                    <button className="btn btn-success px-3 text-nowrap" type="submit" onClick={addTask}>
                        Add Task
                    </button>
                </form>
            </div>

            {/* Task List */}
            <div className="row">
                <div className="col">
                    <ul>
                        {task.map((t) => {
                            // Dynamic class for completed tasks
                            let liClassName = 'single-task';
                            if (t.isDone === true) {
                                liClassName += ' done';
                            }

                            // Conditional button styling & text
                            let markDoneButtonClassName = t.isDone
                                ? 'btn btn-success mx-4'
                                : 'btn btn-outline-secondary mx-4';

                            let markDoneButtonText = t.isDone ? 'Mark as Undone' : 'Mark as Done';

                            return (
                                <li key={t.id} className={liClassName}>
                                    {/* Task Text - First letter capitalized */}
                                    {t.task.charAt(0).toUpperCase() + t.task.slice(1)}

                                    {/* Mark Done / Undone Button */}
                                    <button className={markDoneButtonClassName} onClick={() => markDone(t.id)}>
                                        {markDoneButtonText}
                                    </button>

                                    {/* Delete Button */}
                                    <button className="btn btn-danger mx-4" onClick={() => removeTask(t.id)}>
                                        Delete
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
