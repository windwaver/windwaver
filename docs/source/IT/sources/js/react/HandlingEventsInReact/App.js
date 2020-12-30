import React from "react"

function cliqueMoi() {
    console.log("J'ai été cliqué")
}

function App() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/300" />
            <br />
            <br />
            <button onClick={cliqueMoi}>Click me</button>
        </div>
    )
}
export default App