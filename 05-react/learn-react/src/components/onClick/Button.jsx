import './Button.css';

function Button() {
    const handleClick = () => {
        console.log('Button clicked ONCE!');
    };

    const handleDoubleClick = () => {
        console.log('Button clicked TWICE!');
    };

    return (
        <div className="button-container">
            <div className="button-group">
                <button onClick={handleClick}>Click Me, Once</button>
                <button onDoubleClick={handleDoubleClick}>Click Me, Twice</button>
            </div>
            <p className="instruction">Please check the console for the output!</p>
        </div>
    );
}

export default Button;
