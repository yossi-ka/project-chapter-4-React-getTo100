import React, { useState } from 'react';
import NumberManipulator from './NumberManipulator';
import classes from '../styleBoard.module.css';

function Board(props) {
    console.log(props.isActive);
    
    const getRandomNumber = () => Math.floor(Math.random() * 100);

    const [number, setNumber] = useState(getRandomNumber());
    const [steps, setSteps] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [scores, setScores] = useState([]);

    const handleUpdateNumber = (newNumber) => {
        if (newNumber === 100) {
            setGameOver(true);
            setScores([...scores, steps + 1]);  // עדכון מערך הציונים
        }
        setNumber(newNumber);
        setSteps(steps + 1);
        props.moveTurn()
    };

    const handleNewGame = () => {
        setNumber(getRandomNumber());
        setSteps(0);
        setGameOver(false);
    };

    return (
        <div className={`${classes.board}`}>
            <h2>Player: {props.name}</h2>
            {gameOver ? (
                <div>
                    <h3>Game Over! You've reached 100!</h3>
                    <button onClick={handleNewGame}>Start New Game</button>
                </div>
            ) : (
                <NumberManipulator number={number} updateNumber={handleUpdateNumber} isActive={props.isActive}/>
            )}
            <div className={classes.stepsCounter}>Steps: {steps}</div>
            <div className={classes.scores}>Scores: {scores.join(', ')}</div>
        </div>
    );
}

export default Board;
