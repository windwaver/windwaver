import React from "react"

function Joke(props) {
    const styles1 = {
        display: props.question ? "block" : "none",
        color: "#FF8C00",
    }
    const styles2 = {
        color: !props.question && "#888888"
    }
    return (
        <div>
            <h3 style={styles1}>Question: {props.question}</h3>
            <h3 style={styles2}>Réponse: {props.punchline}</h3>
            <br />
        </div>
    )
}
export default Joke