import './LudoBoard.css';
import { useState } from 'react';

export default function LudoBoard() {
    const [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0,
    });

    const updateBlue = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                blue: prevMoves.blue + 1,
            };
        });
    };

    const updateYellow = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                yellow: prevMoves.yellow + 1,
            };
        });
    };

    const updateGreen = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                green: prevMoves.green + 1,
            };
        });
    };

    const updateRed = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                red: prevMoves.red + 1,
            };
        });
    };
    return (
        <div className="container">
            <div className="row name-n-rules text-center">
                <h1 className="display-5 fw-bold  border-bottom py-2">Ludo</h1>
            </div>

            <div className="row text-center d-flex flex-column align-items-center ">
                <div className="col-2 py-3">
                    <p className="fw-bold py-2">Blue moves: {moves.blue}</p>
                    <button className="btn btn-info px-3" onClick={updateBlue}>
                        Roll
                    </button>
                </div>

                <div className="col-2 py-3">
                    <p className="fw-bold py-2">Yellow moves: {moves.yellow} </p>
                    <button className="btn btn-warning px-3" onClick={updateYellow}>
                        Roll
                    </button>
                </div>

                <div className="col-2 py-3">
                    <p className="fw-bold py-2">Green moves: {moves.green}</p>
                    <button className="btn btn-success px-3" onClick={updateGreen}>
                        Roll
                    </button>
                </div>

                <div className="col-2 py-3">
                    <p className="fw-bold py-2">Red moves: {moves.red}</p>
                    <button className="btn btn-danger px-3" onClick={updateRed}>
                        Roll
                    </button>
                </div>
            </div>
        </div>
    );
}
