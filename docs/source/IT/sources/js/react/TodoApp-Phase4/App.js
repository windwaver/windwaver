import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)
    return (
        <div>
            { todoItems}
        </div>
    )
}

export default App