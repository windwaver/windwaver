import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Bob"
    const lastName = "Ziroll"
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    let timeOfDay

    if (hours >= 0 && hours <= 5)
        timeOfDay = "night"
    else if (hours>5 && hours<12)
        timeOfDay="morning"
    else if (hours > 12 && hours <= 17)
         timeOfDay = "afternoon"
    else
        timeOfDay ="evening"

        return (
        <h1>Good {timeOfDay} {`${firstName} ${lastName}`} it's {hours}:{minutes}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
