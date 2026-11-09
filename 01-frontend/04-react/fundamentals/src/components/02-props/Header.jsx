// Child component receives props as an object: { studentName, onUpdateAdmin }
export default function Header(props) {
    return (
        <div>
            {/* Reading prop value passed down from parent */}
            <h1 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>
                User: {props.studentName}
            </h1>

            {/* 
              When clicked, invokes the callback function passed from the parent.
              This triggers setUserName('Admin') in UserProfile (Lifting State Up).
            */}
            <button 
                onClick={props.onUpdateAdmin}
                style={{
                    padding: '8px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    borderRadius: '6px',
                    border: '1px solid #d4d4d8',
                    backgroundColor: '#ffffff',
                    color: '#18181b',
                    cursor: 'pointer',
                }}
            >
                Change to Admin
            </button>
        </div>
    );
}
