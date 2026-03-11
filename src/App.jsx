import "./App.css";
import Todolist from "./ToDoList";
import Lottery from "./Lottery.jsx";
import { sum } from "./helper.js";

function App() {
  let winCondition = (ticket) => {
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0]===0;
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
