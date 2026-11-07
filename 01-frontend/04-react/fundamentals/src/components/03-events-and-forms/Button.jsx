// import './Button.css';

// import { useState } from 'react';

// function Button() {
//     const [click1, setClick] = useState(false);
//     const [click2, setDblClick] = useState(false);

//     const handleClick = () => {
//         console.log('Button clicked ONCE!');
//         setClick(true);
//     };

//     const handleDoubleClick = () => {
//         console.log('Button clicked TWICE!');
//         setDblClick(true);
//     };

//     return (
//         <div className="button-container">
//             <p onClick={setClick}>para1: {String(click1)}</p>
//             <p onClick={setDblClick}>para2: {String(click2)}</p>
//             <p></p>
//             <div className="button-group">
//                 <button onClick={handleClick}>Click Me, Once</button>
//                 <button onDoubleClick={handleDoubleClick}>Click Me, Twice</button>
//             </div>
//             <p className="instruction">Please check the console for the output!</p>
//         </div>
//     );
// }

// export default Button;


import './Button.css';

import { useState } from 'react';

function Button() {
    const [click1, setClick] = useState(false);
    const [click2, setDblClick] = useState(false);
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setClick(true);
        setMessage('Button clicked ONCE!');
        alert("Button clicked ONCE!")
        console.log('Button clicked ONCE!');
    };

    const handleDoubleClick = () => {
        setDblClick(true);
        setMessage('Button clicked TWICE!');
    };

    return (
        <div className="button-container">

            <p className="instruction">{message.toUpperCase()}</p>

            <div className="button-group">
                <button onClick={handleClick}>Click Me, Once</button>
                <button onDoubleClick={handleDoubleClick}>Click Me, Twice</button>
            </div>


        </div>
    );
}

export default Button;
