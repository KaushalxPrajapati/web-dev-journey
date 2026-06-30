export default function SayHello() {
    let userName = 'Kaushal';
    let textColor = 'green';
    return (
        <>
            <h1 style={{ color: textColor }}>Hello, {userName}</h1>
        </>
    );
}
