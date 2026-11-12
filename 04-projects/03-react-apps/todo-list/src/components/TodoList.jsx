import './TodoList.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoList() {
    // The full list of tasks
    const [tasks, setTasks] = useState([]);

    // Add a task
    function addTask(text) {
        if (!text.trim()) return; // skip empty

        const newTask = {
            task: text,
            id: uuidv4(),
            isDone: false,
        };

        setTasks([...tasks, newTask]);
    }

    // Mark done / undone
    function toggleTask(id) {
        const updated = tasks.map((t) => {
            if (t.id === id) {
                return { ...t, isDone: !t.isDone };
            }
            return t;
        });
        setTasks(updated);
    }

    // Delete a task
    function removeTask(id) {
        const updated = tasks.filter((t) => t.id !== id);
        setTasks(updated);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center fw-bold display-5 my-3 mb-4">TO-DO List</h4>
                </div>
            </div>

            {/* Form - we pass addTask down as a prop */}
            <div className="row justify-content-center">
                <TodoForm onAdd={addTask} />
            </div>

            {/* List - we pass tasks + both actions down as props */}
            <div className="row justify-content-center">
                <div className="col-md-5">
                    {tasks.length === 0 ? (
                        <p className="text-center text-muted mt-3">No tasks yet — add one above!</p>
                    ) : (
                        <ul className="list-unstyled">
                            {tasks.map((t) => (
                                <TodoItem key={t.id} todo={t} onToggle={toggleTask} onRemove={removeTask} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
