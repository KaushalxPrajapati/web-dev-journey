import './App.css';
import { useState } from 'react';

// import SayHello from './components/SayHello.jsx';
// import Timer from './components/hooks/useEffect/Timer.jsx';
// import Button from './components/hooks/onClick/Button.jsx';
// import Counter2 from './components/hooks/Counter/Counter2.jsx';
// import LikeButton from './components/hooks/LikeButton/LikeButton.jsx';

// import { ThemeContext } from './components/hooks/useContext/ThemeContext.jsx';
// import Child from './components/hooks/useContext/Child.jsx';

import UserContext from './UserContext.jsx';
import Child from './Child.jsx';

import LudoBoard from './components/LudoBoard/LudoBoard.jsx';

export default function App() {
    return (
        <div>
            {/* <UserContext.Provider value="Kaushal">
                <Child />
            </UserContext.Provider> */}

            <LudoBoard />
        </div>
    );
}
