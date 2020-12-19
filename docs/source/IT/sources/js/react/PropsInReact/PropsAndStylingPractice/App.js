import React from "react"
import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke
                question="Où se cachent les canards?"
                punchline="Dans les coins-coins."
            />
            <Joke
                question="Quel animal a trois bosses?"
                punchline="Un chameau qui s'est cogné."
            />
            <Joke
                question="Comment appelle-t-on un avion qui rebondit?"
                punchline="Un boing."
            />
            <Joke
                question="Pourquoi le père noël a-t-il une barbe blanche?"
                punchline="Pour ne pas être confondu avec le petit chaperon rouge."
            />
            <Joke
                punchline="Vaut mieux prévenir que guérir."
            />
        </div>
    )
}

export default App