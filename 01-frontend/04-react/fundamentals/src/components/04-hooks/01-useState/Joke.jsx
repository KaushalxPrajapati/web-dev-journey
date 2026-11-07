import { useState } from 'react';

export default function Joke() {
    const [joke, setJoke] = useState({});

    const getJoke = async () => {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const jsonResponse = await response.json();
        setJoke(jsonResponse);
    };

    return (
        <div>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
            <button onClick={getJoke}>Get Joke...!</button>
        </div>
    );
}
