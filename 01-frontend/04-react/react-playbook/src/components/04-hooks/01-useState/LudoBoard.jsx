import './LudoBoard.css';
import { useState } from 'react';

export default function LudoBoard() {
    // Complex state: an object with 4 counter properties
    const [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0,
    });

    // CRITICAL IMMUTABILITY RULE:
    // Never mutate state directly (moves.blue += 1).
    // React compares object references (prev === next). Direct mutation won't trigger re-render!
    // Always use the spread operator {...prevMoves} to create a brand-new object.
    const updateBlue = () => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            blue: prevMoves.blue + 1,
        }));
    };

    const updateYellow = () => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            yellow: prevMoves.yellow + 1,
        }));
    };

    const updateGreen = () => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            green: prevMoves.green + 1,
        }));
    };

    const updateRed = () => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            red: prevMoves.red + 1,
        }));
    };

    return (
        <div className="container">
            <div className="row name-n-rules text-center">
                <h1 className="display-5 fw-bold border-bottom py-2">Ludo Board</h1>
                <p>Click any button below to update that token's score!</p>
            </div>
            <div className="row justify-content-center text-center mt-4">
                <div className="col-12 col-md-6 col-lg-3 my-2">
                    <p className="fs-5">Blue moves = {moves.blue}</p>
                    <button className="btn btn-primary" onClick={updateBlue}>
                        +1 Blue
                    </button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-2">
                    <p className="fs-5">Yellow moves = {moves.yellow}</p>
                    <button className="btn btn-warning" onClick={updateYellow}>
                        +1 Yellow
                    </button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-2">
                    <p className="fs-5">Green moves = {moves.green}</p>
                    <button className="btn btn-success" onClick={updateGreen}>
                        +1 Green
                    </button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-2">
                    <p className="fs-5">Red moves = {moves.red}</p>
                    <button className="btn btn-danger" onClick={updateRed}>
                        +1 Red
                    </button>
                </div>
            </div>
        </div>
    );
}
