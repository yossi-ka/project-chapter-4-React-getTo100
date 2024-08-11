import classes from "../getTo100.module.css";
import Board from "./Board";
import { useState } from "react";
import {players} from "../GetTo100";
import Top from "./TopScore";

const control = {
  c: 0,
  p: 0,
};

function MainBoard(props) {
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
      const ap2 = players.filter((pl) => pl.isActive);
      if (ap2.length === 0) props.setTheresPlayers(false);
      const currentIndex = ap2.findIndex((pl) => pl.id === prevId);
      const nextIndex = (currentIndex + 1) % ap2.length;
      return ap2[nextIndex].id;
    });
  }

  return (
    <>
      <h1>Welcome to 'Get To 100'</h1>
 <Top />
      <div className={classes.mainBoard}>
        {activePlayers.map((pl) => (
          <Board
            key={pl.id}
            id={pl.id}
            name={pl.name}
            scores={pl.scores}
            isActive={pl.id === currentPlayerId}
            moveTurn={moveTurn}
            control={control}
          />
        ))}
      </div>
    </>
  );
}
export default MainBoard;
