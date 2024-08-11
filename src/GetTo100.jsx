import MainBoard from "./components/MainBoard";
import Registration from "./components/Registration";
import { useState } from "react";
import players from "./components/PlayersList";
const play = JSON.stringify(players);
localStorage.setItem("PlayersList", play);

function GetTo100() {
  const [theresPlayers, setTheresPlayers] = useState(false);
  return theresPlayers ? (
    <MainBoard setTheresPlayers={setTheresPlayers} />
  ) : (
    <Registration setTheresPlayers={setTheresPlayers} />
  );
}
export default GetTo100;
