import React from "react"

function Joke(props) {
    return(
        <div>
            <h3>Question: {props.question}</h3>
            <h3>Réponse: {props.punchline}</h3>
            <br/>
        </div>
    )
}
export default Joke