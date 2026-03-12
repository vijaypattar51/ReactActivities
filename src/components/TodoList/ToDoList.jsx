import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, settodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  let updatenewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  let addTask = () => {
    settodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  let deleteTodo = (id) => {
    settodos(todos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    settodos(
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }),
    );
  };

  let uppercaseone = (id) => {
    settodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      }),
    );
  };

  let markAsDone = (id) => {
    settodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  let MarkAsDoneAll=()=>{
    settodos(todos.map((todo)=>{
      return {
        ...todo,
        isDone:true,
      }
    }))
  }
  return (
    <div>
      <input
        placeholder="add a task"
        onChange={updatenewTodo}
        value={newTodo}
      />
      <button onClick={addTask}>add task</button>
      <hr />

      <p>Todo List</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => uppercaseone(todo.id)}>uppercase</button>
            <button onClick={() => markAsDone(todo.id)}>mark as read</button>
          </li>
        ))}
      </ul>

      <button onClick={upperCaseAll}>uppercase all</button>
      <button onClick={MarkAsDoneAll}>Mark as Done All</button>
    </div>
  );
}

// app opens
//      ↓
// todos = ["sample task"], newTodo = ""
//      ↓
// user types "buy milk"
//      ↓
// onChange fires on every letter
//      ↓
// updatenewTodo runs, newTodo = "buy milk"
//      ↓
// user clicks add task button
//      ↓
// addTask runs
//      ↓
// todos = ["sample task", "buy milk"]
// newTodo = ""
//      ↓
// React re-renders
//      ↓
// map runs on new todos array
//      ↓
// both items appear on screen
// input box is cleared