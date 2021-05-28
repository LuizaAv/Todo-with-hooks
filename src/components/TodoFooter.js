


import "./TodoFooter.css"

export default function TodoFooter({todos, clearCompleted, allItems}){

    const completed = todos.filter((todos) => todos.isCompleted).length

    return(
        <div className="footerContainer">
            <span className="lengthSpan">{completed}/{todos.length} is completed</span>
            <button 
            onClick={clearCompleted} 
            className="deleteBtn"
            >Clear Completed</button>
        </div>
    )
}