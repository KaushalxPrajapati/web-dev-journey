import { useContext } from 'react';
import UserContext from './UserContext.jsx';

function Child() {
    // 2. Consume the Context directly using useContext()
    // No prop drilling needed! Value is received directly from the nearest <UserContext.Provider>
    const name = useContext(UserContext);

    return (
        <div>
            <h2 style={{ fontSize: '1.25rem', color: '#18181b', marginBottom: '6px' }}>
                Hello, {name}!
            </h2>
            <p style={{ color: '#71717a', fontSize: '0.85rem' }}>
                Value read directly from <code>UserContext</code> without passing props through intermediate components.
            </p>
        </div>
    );
}

export default Child;
