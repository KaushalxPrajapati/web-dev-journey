export default function SayHello() {
    let userName = 'Kaushal';
    let textColor = 'green';

    return (
        // Fragment (<> ... </>) groups elements without creating an extra <div> in the real DOM
        <>
            {/* 
              - Double {{}} for inline style: outer {} enters JS mode, inner {} is the style object 
              - Single {} injects the variable 'userName' directly into the heading
            */}
            <h1 style={{ color: textColor }}>Hello, {userName}</h1>
        </>
    );
}
