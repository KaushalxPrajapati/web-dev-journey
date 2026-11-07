function sayHello() {
    console.log('Hello World');
}

export default function Button() {
    return (
        <>
            <button onClick={sayHello}>Click me</button>
        </>
    );
}
