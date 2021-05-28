import TodoItem from "./TodoItem"



export default function TodoList({todos, onChange, onDelete}) {
    return(
        <div>
            {
                todos.map(item => {
                    return <TodoItem 
                    key={item.id} 
                    todo={item}
                    isCompleted={item.isCompleted}
                    onChange={onChange}
                    onDelete={onDelete}
                    />
                })
            }
        </div>
    )
}