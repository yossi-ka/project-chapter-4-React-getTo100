import players from "./PlayersList";
import classes from "../getTo100.module.css";
import Board from "./Board";
import { useState } from "react";

const control = {
  c: 0,
  p: 0,
};

function MainBoard() {
  const [currentPlayerId, setCurrentPlayerId] = useState(1);
  const [activePlayers, setActivePlayers] = useState([]);

  control.c === 0 &&
    (() => {
      const AP = players.filter((pl) => pl.isActive);
      setActivePlayers(AP);
      if (control.p === 0 && AP.length !== 0) {
        setCurrentPlayerId(AP[0].id);
        control.p++;
      }
      control.c++;
    })();

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
                id={pl.id}
                name={pl.name}
                scores={pl.scores}
                isActive={pl.id === currentPlayerId}
                moveTurn={moveTurn}
                control={control}
              />
            )
        )}
      </div>
    </>
  );
}
export default MainBoard;
