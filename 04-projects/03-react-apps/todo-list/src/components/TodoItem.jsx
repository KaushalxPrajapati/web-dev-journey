function TodoItem({ todo, onToggle, onRemove }) {
    // Add "done" class if the task is finished
    const rowClass = 'single-task' + (todo.isDone ? ' done' : '');

    // Choose button color and text based on isDone
    const toggleClass = todo.isDone ? 'btn btn-success' : 'btn btn-outline-secondary';

    const toggleText = todo.isDone ? 'Mark as Undone' : 'Mark as Done';

    // Capitalize first letter of the task
    const shownText = todo.task.charAt(0).toUpperCase() + todo.task.slice(1);

    return (
        <li className={rowClass}>
            <span className="task-text">{shownText}</span>

            <div className="task-buttons">
                <button className={toggleClass} onClick={() => onToggle(todo.id)}>
                    {toggleText}
                </button>

                <button className="btn btn-danger" onClick={() => onRemove(todo.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
