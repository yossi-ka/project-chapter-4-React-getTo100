import players from "./PlayersLIst";
import classes from "../getTo100.module.css";
import Board from "./Board";
import { useState } from "react";
function MainBoard() {
  const [currentPlayerId, setCurrentPlayerId] = useState(1);
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
              />
            )
        )}
      </div>
    </>
  );
}
export default MainBoard;
