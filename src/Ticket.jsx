import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket}){
    return(
        <div className="Ticket">
            <p>Ticket</p>
            {
                ticket.map((n, idx)=>(
                    <TicketNum num={n} key={idx}/>
                ))
            }
        </div>
    )
}