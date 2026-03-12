import "./App.css";
import LudoBoard from "./components/LudoBoard/LudoBoard.jsx";
import Todolist from "./components/TodoList/ToDoList.jsx";
import Lottery from "./components/Lottery/Lottery.jsx";
import { sum } from "./components/Helpers/helper.js";

function App() {
  let winCondition = (ticket) => {
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0] === 0;
  };

  return (
    <>
      
    </>
  );
}

export default App;
