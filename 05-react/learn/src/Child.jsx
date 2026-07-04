import { useContext } from 'react';
import UserContext from './components/UserContext.jsx';

function Child() {
    const name = useContext(UserContext);
    return (
        <>
            <h2>Hello, {name}</h2>
        </>
    );
}

export default Child;
