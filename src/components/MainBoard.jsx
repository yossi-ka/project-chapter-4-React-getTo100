import players from "./PlayersLIst";
import classes from "../getTo100.module.css";
import Board from "./Board";
import { useState } from "react";
let current = -1;

function MainBoard() {
  const [currentPlayerId, setCurrentPlayerId] = useState(1);

  function moveTurn() {
    const arr = players.filter((pl) => pl.isActive);
    current++;
    if (current === arr.length) current = 0;    
    setCurrentPlayerId(arr[current]);   
  }

  return (
    <>
      <h1>Welcome to 'Get To 100'</h1>
      <div className={classes.mainBoard}>
        {players.map(
          (pl) =>
            pl.isActive && (
              <Board
                key={pl.id}
                name={pl.name}
                scores={pl.scores}
                isActive={pl.id === currentPlayerId}
                moveTurn={moveTurn}
              />
            )
        )}
      </div>
    </>
  );
}
export default MainBoard;
