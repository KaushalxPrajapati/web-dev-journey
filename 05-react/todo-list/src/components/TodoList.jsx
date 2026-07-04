import './TodoList.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    function addTask() {
        if (newTask.trim() === '') return;
        setTask([...task, { task: newTask, id: uuidv4() }]);
        setNewTask('');
    }

    function updateTask(event) {
        setNewTask(event.target.value);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center fw-bold display-5 mb-5">TO-DO List</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center align-items-center py-5">
                    <input
                        type="text"
                        placeholder="Add a task..."
                        className="form-control me-4"
                        value={newTask}
                        onChange={updateTask}
                    />
                    <button className="btn btn-success px-3 text-nowrap" onClick={addTask}>
                        Add Task
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <ul>
                        {task.map((t) => (
                            <li key={t.id}>{t.task.charAt(0).toUpperCase() + t.task.slice(1)}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
