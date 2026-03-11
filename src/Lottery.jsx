import { useState } from "react";
import { genTicket, sum } from "./helper"; // for generating numbers and giving its sum
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";

export default function Lottery({ n = 3, winCondition }) {
  const [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <p>Lottery game</p>
      <br />
      <Ticket ticket={ticket} />
      <Button action={buyTicket}/>
      <h3>{isWinning && "congratulation!"}</h3>
    </div>
  );
}
