import React, { useState } from 'react';
import NumberManipulator from './NumberManipulator';
import '../styleBoard.module.css';

function Board(props) {
    const getRandomNumber = () => Math.floor(Math.random() * 100);

    const [number, setNumber] = useState(getRandomNumber());
    const [steps, setSteps] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const handleUpdateNumber = (newNumber) => {
        if (newNumber === 100) {
            setGameOver(true);
        }
        setNumber(newNumber);
        setSteps(steps + 1);
    };

    const handleNewGame = () => {
        setNumber(getRandomNumber());
        setSteps(0);
        setGameOver(false);
    };

    return (
        <div className="board">
            
            <h2> player: {props.name}</h2>
            <h4>Current number: {number}</h4>
            {gameOver ? (
                <div>
                    <h3>Game Over! You've reached 100!</h3>
                    <button onClick={handleNewGame}>Start New Game</button>
                </div>
            ) : (
                <NumberManipulator number={number} updateNumber={handleUpdateNumber} />
            )}
            <div className="steps-counter">Steps: {steps}</div>
        </div>
    );
}

export default Board;
