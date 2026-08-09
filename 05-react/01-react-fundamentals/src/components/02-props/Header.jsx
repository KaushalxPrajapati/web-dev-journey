    export default function Header(props) {
    return (
        <>
            <h1>{props.studentName}</h1>
            <button onClick={props.onUpdateAdmin}>Change to Admin</button>
        </>
    );
}
