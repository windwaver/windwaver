import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Bob"
    const lastName = "Ziroll"

    return (
        <h1>Hello {firstName + " " + lastName}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
