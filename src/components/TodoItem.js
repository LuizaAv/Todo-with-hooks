import "./TodoItem.css"


export default function TodoItem({todo, onChange, onDelete, isCompleted}){
    let completed = () => {
            return <div style={{textDecorationLine: 'line-through'}}>{todo.value}</div>
        }
    let notComplete = () => {
        return <div>{todo.value}</div>
    }

    
    return(
        <div>
            <label>
                <input 
                type="checkbox" 
                checked={todo.isCompleted}
                onChange={(e) => {
                    onChange({
                        ...todo, 
                        isCompleted: e.target.checked
                    })
                }}
                className="checkboxInput"
                />
                {isCompleted ? completed() : notComplete()}
                <button 
                onClick={()=> {
                    onDelete(todo)
                }}
                className="deleteButton"
                >X</button>
            </label>
        </div>
    )
}