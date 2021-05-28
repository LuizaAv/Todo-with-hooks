import { useState } from "react"


import "./TodoForm.css"

export default function TodoForm({addTodo}) {

    const [newTodo, setNewTodo] = useState("")

    return(
        <form onSubmit = {(e) => {
            e.preventDefault()
            addTodo(newTodo)
            setNewTodo("")
        }}>
            <input 
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="newTodoInput"
            />
            <button className="addButton">Add</button>
        </form>
    )
}