import React, { useState } from "react";
import { players } from "../GetTo100";

const Top = () => {
  const [show, setShow] = useState(false);
  const plTop = players.filter((pl) => pl.scores.length > 0);
  if (plTop.length > 0) {
    plTop.forEach((pl) => {
      pl.ava =
        pl.scores.reduce((current, total) => current + total) /
        pl.scores.length;
    });
    plTop.sort((a, b) => a.ava - b.ava);
    plTop.slice(0, 3);
    console.log(plTop);
  }
const Show = () => {
setShow(!show)
}
  return (
    <div>
      <button onClick={Show}>hi level score </button>

      <ul style={{ display: show ? "block" : "none" }}>
        {plTop.map((item, idx) => (
          <li key={idx}>
            {item.name} {"==>"} {item.scores.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Top;
