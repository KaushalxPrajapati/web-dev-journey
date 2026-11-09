import { useState } from 'react';
import Header from './Header.jsx';

function UserProfile() {
    // Parent component owns the state
    const [userName, setUserName] = useState('Kaushal');

    return (
        <div>
            {/* 
              Component Communication:
              1. Passing data DOWN via prop: studentName={userName}
              2. Passing callback DOWN to receive updates UP: onUpdateAdmin={() => setUserName('Admin')}
            */}
            <Header 
                studentName={userName} 
                onUpdateAdmin={() => setUserName('Admin')} 
            />
        </div>
    );
}

export default UserProfile;
