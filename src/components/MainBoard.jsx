import players from "./PlayersLIst";
import classes from "../getTo100.module.css";
import Board from "./Board";
import { useState } from "react";

let c = 0;

function MainBoard() {
  const [currentPlayerId, setCurrentPlayerId] = useState(2);
  if (c === 0) {
    const activePlayers = players.filter((pl) => pl.isActive);
    setCurrentPlayerId(activePlayers[0].id);
    c++;
  }

  function moveTurn() {
    setCurrentPlayerId((prevId) => {
      const activePlayers = players.filter((pl) => pl.isActive);
      const currentIndex = activePlayers.findIndex((pl) => pl.id === prevId);
      const nextIndex = (currentIndex + 1) % activePlayers.length;
      return activePlayers[nextIndex].id;
    });
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
