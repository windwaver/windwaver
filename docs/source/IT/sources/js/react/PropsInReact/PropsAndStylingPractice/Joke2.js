import React from "react"

function Joke(props) {
    return(
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3>Réponse: {props.punchline}</h3>
            <br/>
        </div>
    )
}
export default Joke