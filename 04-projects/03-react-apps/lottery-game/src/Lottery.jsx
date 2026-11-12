import { useState } from 'react';
import './Lottery.css';

function Lottery() {
    const [ticket, setTicket] = useState([0, 0, 0]);

    const handleClick = () => {
        const newTicket = [];
        for (let i = 0; i < 3; i++) {
            newTicket.push(Math.floor(Math.random() * 10)); // random digit (0-9)
        }
        setTicket(newTicket);
    };

    // Calculate sum of ticket digits
    const sum = ticket[0] + ticket[1] + ticket[2];
    const isWinning = sum === 15;

    // Check if the user has bought at least one ticket
    const hasPlayed = ticket.some((num) => num !== 0);

    return (
        <div className="container">
            <h1>Lottery Game</h1>
            <p>Buy a ticket. If the sum of digits is 15, you win!</p>

            <h3 className="ticket">{ticket.join(' - ')}</h3>

            <button onClick={handleClick}>Buy New Ticket</button>

            <div className="message">
                {hasPlayed &&
                    (isWinning ? (
                        <h3 className="won">🎉 Congratulations, You Won!</h3>
                    ) : (
                        <h3 className="lost">Better Luck Next Time! (Sum: {sum})</h3>
                    ))}
            </div>
        </div>
    );
}

export default Lottery;
