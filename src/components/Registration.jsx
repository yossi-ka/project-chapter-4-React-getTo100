import players from "./PlayersLIst";
import classes from "../getTo100.module.css";

function Registration(props) {
  function send(event) {
    event.preventDefault();
    // check if player exist
  }
  return (
    <>
      <form action="" onSubmit={send} className={classes.myForm}>
        <h1>Enter the players (2-4)</h1>
        <input type="text" placeholder="Email or Name" required />
        <input type="text" placeholder="Email or Name" required />
        <input type="text" placeholder="Email or Name" />
        <input type="text" placeholder="Email or Name" />
        <button type="submit">Start</button>
      </form>
    </>
  );
}

export default Registration;
