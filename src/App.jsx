import "./App.css";
import LudoBoard from "./components/LudoBoard/LudoBoard.jsx";
import Todolist from "./components/TodoList/ToDoList.jsx";
import Lottery from "./components/Lottery/Lottery.jsx";
import { sum } from "./components/Helpers/helper.js";
import Form from "./components/Forms/Form.jsx"
import CommentsForm from "./components/Forms/CommentsForm.jsx";

function App() {
  // let winCondition = (ticket) => {
  //   // return ticket.every((num) => num === ticket[0]);
  //   return ticket[0] === 0;
  // };x

  return (
    <>
      {/* <Lottery n={3} winCondition={winCondition} /> */}
      {/* <Form/> */}
      <CommentsForm/>
    </>
  );
}

export default App;
