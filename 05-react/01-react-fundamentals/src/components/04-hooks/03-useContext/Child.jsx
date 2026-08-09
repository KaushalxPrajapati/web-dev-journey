import { useContext } from 'react';
import UserContext from './UserContext.jsx';

function Child() {
    const name = useContext(UserContext);
    return (
        <>
            <h2>Hello, {name}</h2>
        </>
    );
}

export default Child;
