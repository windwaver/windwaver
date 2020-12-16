import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Bob"
    const lastName = "Ziroll"
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    let timeOfDay

    const styles = {
        fontSize: 50
    }    

    if (hours >= 0 && hours <= 5){
        timeOfDay = "night"
        styles.color = "#04756F"
    }
    else if (hours>5 && hours<12){
        timeOfDay="morning"
        styles.color = "#8914A3"
    }
    else if (hours > 12 && hours <= 17){
        timeOfDay = "afternoon"
        styles.color = "#D90000"
    }
    else {
        timeOfDay ="evening"
        styles.color = "#6A0FDE"
    }

    

        return (
        <h1 style = {styles}>Good {timeOfDay} {`${firstName} ${lastName}`} it's {hours}:{minutes}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
