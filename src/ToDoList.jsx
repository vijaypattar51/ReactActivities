import { useState } from "react";

export default function TodoList() {
  const [todos, settodos] = useState(["sample task"]);
  const [newTodo, setNewTodo]=useState("");

  let updatenewTodo=(event)=>{
    setNewTodo(event.target.value);
  }

  let addTask=()=>{
    settodos([...todos,newTodo]);
    setNewTodo("");
  }
  return (
    <div>
      <input placeholder="add a task" onChange={updatenewTodo} value={newTodo}/>
      <button onClick={addTask}>add task</button>
      <hr />

      <p>Todo List</p>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
