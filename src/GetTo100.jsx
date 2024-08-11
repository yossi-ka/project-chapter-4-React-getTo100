import MainBoard from "./components/MainBoard";
import Registration from "./components/Registration";
import { useState } from "react";
import pls from "./components/PlayersList";
const play = JSON.stringify(pls);
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
export const players = JSON.parse(localStorage.getItem("PlayersList"));
