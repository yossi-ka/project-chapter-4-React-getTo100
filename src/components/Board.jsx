import React, { useState } from "react";
import NumberManipulator from "./NumberManipulator";
import classes from "../styleBoard.module.css";
import { players } from "../GetTo100";

function Board(props) {
  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const [number, setNumber] = useState(getRandomNumber());
  const [steps, setSteps] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState([]);

  const handleUpdateNumber = (newNumber) => {
    if (newNumber === 100) {
      setGameOver(true);
      const scrs = [...scores, steps + 1];
      setScores(scrs);
      players.filter((pl) => pl.id === props.id)[0].scores.push(steps + 1);
      localStorage.setItem("PlayersList", JSON.stringify(players));
    }
    setNumber(newNumber);
    setSteps(steps + 1);
    if (newNumber !== 100) {
      props.moveTurn();
    }
  };

  const handleNewGame = () => {
    setNumber(getRandomNumber());
    setSteps(0);
    setGameOver(false);
  };

  const handleQuitGame = () => {
    players.forEach((pl) => {
      if (pl.id === props.id) pl.isActive = false;
    });
    props.control.c = 0;
    props.moveTurn();
  };

  return (
    <div className={classes.board}>
      <h2>{props.name}</h2>
      {gameOver ? (
        <div>
          <h3>Game Over! You've reached 100!</h3>
          <button onClick={handleNewGame}>Start New Game</button>
          <button onClick={handleQuitGame}>Quit Game</button>
        </div>
      ) : (
        <NumberManipulator
          number={number}
          updateNumber={handleUpdateNumber}
          isActive={props.isActive}
        />
      )}
      <div className={classes.stepsCounter}>Steps: {steps}</div>
      <div className={classes.scores}>Scores: {scores.join(", ")}</div>
    </div>
  );
}

export default Board;
