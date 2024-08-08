import Board from "./components/Board";
import Registration from "./components/Registration";
import { useState } from "react";
function GetTo100() {
  const [theresPlayers, setTheresPlayers] = useState(false);
  return theresPlayers ? (
    <Board />
  ) : (
    <Registration setTheresPlayers={setTheresPlayers} />
  );
}

export default GetTo100;
