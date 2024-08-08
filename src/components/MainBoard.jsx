import players from "./PlayersLIst";
import Board from "./Board";
function MainBoard() {
  return (
    <>
      <h1>Welcome to 'Get To 100'</h1>
      {players.map(
        (pl) => pl.isActive && <Board name={pl.name} scores={pl.scores} />
      )}
    </>
  );
}
export default MainBoard;
