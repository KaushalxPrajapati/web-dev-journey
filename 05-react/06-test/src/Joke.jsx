import { useState } from 'react';

export default function Joke() {
    const [joke, setJoke] = useState({});

    const getJoke = async () => {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const jsonResponse = await response.json();
        setJoke(jsonResponse);
    };

    return (
        <>
            <h1>{joke.setup}</h1>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>Get Joke...!</button>
        </>
    );
}
