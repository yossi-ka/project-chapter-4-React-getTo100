import {players} from "../GetTo100";
import classes from "../getTo100.module.css";

function Registration(props) {
  function start(event) {
    event.preventDefault();
    let playersAreOK = true;
    const P = event.target.querySelectorAll("p");
    P.forEach((p) => {
      if (p.style.display === "block") {
        playersAreOK = false;
      } else {
        const input = p.previousElementSibling;
        if (input && input.value !== "") {
          updatePlayer(input.value);
        }
      }
    });
    if (playersAreOK && min2players()) props.setTheresPlayers(true);
  }

  return (
    <>
      <form action="" onSubmit={start} className={classes.myForm}>
        <h1>Enter the players (2-4)</h1>
        <div className={classes.divInput}>
          <input
            type="text"
            placeholder="Email or Name"
            onChange={warning}
            required
          />
          <p style={{ display: "none" }}>player not exist</p>
        </div>
        <div className={classes.divInput}>
          <input
            type="text"
            placeholder="Email or Name"
            onChange={warning}
            required
          />
          <p style={{ display: "none" }}>player not exist</p>
        </div>
        <div className={classes.divInput}>
          <input type="text" placeholder="Email or Name" onChange={warning} />
          <p style={{ display: "none" }}>player not exist</p>
        </div>
        <div className={classes.divInput}>
          <input type="text" placeholder="Email or Name" onChange={warning} />
          <p style={{ display: "none" }}>player not exist</p>
        </div>
        <button type="submit">Start</button>
      </form>
    </>
  );
}

function warning(event) {
  const value = event.target.value;
  const ex = players.filter(
    (play) => value === play.email || value === play.name
  );
  if (ex.length === 0 && value !== "")
    event.target.nextElementSibling.style.display = "block";
  else event.target.nextElementSibling.style.display = "none";
}

function min2players() {
  const active = players.filter((pl) => pl.isActive);
  return active.length >= 2 ? true : false;
}

function updatePlayer(value) {
  const player = players.filter(
    (pl) => pl.email === value || pl.name === value
  );
  if (player.length > 0) players[players.indexOf(player[0])].isActive = true;
}

export default Registration;
