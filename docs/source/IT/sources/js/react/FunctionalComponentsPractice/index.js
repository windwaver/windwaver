import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
    return (
        <div>
            <h1>Zebulus André</h1>
            <p>I'm trying to learn React</p>
            <ol>
                <li>Hawaii</li>
                <li>New York</li>
                <li>Seoul</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))