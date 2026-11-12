import { useState } from 'react';

function TodoForm({ onAdd }) {
    // Only this component needs to know what's being typed
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); // stop page reload
        onAdd(text); // tell the parent "add this task"
        setText(''); // clear the box
    }

    return (
        <form className="col-md-5 d-flex justify-content-center align-items-center my-4 px-0" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a task..."
                className="form-control form-control-lg css-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
            />
            <button className="btn btn-success px-3 text-nowrap" type="submit">
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;
