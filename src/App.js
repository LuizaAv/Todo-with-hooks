import { useState } from "react";
import TodoFooter from "./components/TodoFooter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css"


function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(), 
      value: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(), 
      value: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(), 
      value: "Learn React",
      isCompleted: false
    }
  ])

  return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm addTodo = {(newTodo) => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              value: newTodo,
              isCompleted: false
            }
          ])
        }}/>
        <TodoList 
        todos={todos}
        onDelete={
          (todo) => {
            setTodos(todos.filter((item) => item.id !== todo.id))
          }
        }

        onChange={
          (newTodo) => {
            setTodos(todos.map((todo)=>{
              if(todo.id ===newTodo.id){
                return newTodo
              }
              return todo
            }))
          }
        }
        />
        <TodoFooter 
        todos={todos}
        clearCompleted = {() => {
          setTodos(todos.filter(todo => !todo.isCompleted))
        }}

        allItems = {
          () => {
            setTodos(todos.forEach((todo) => console.log(todo)))
          }
        }
        />
      </div>
  );
}

export default App;
