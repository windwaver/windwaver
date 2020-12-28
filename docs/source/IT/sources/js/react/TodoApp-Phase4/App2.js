import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: todosData
        }
    }
    render() {
        const todoItems = this.state.todo.map(item => <TodoItem key={item.id} item={item} />)
        return (
            <div>
                { todoItems}
            </div>
        )
    }
}

export default App