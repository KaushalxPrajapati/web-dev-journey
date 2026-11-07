import { useState } from 'react';
import Header from './Header.jsx';

function UserProfile() {
    const [userName, setUserName] = useState('Kaushal');
    return (
        <>
            <Header studentName={userName} onUpdateAdmin={() => setUserName('Admin')} />
        </>
    );
}

export default UserProfile;
