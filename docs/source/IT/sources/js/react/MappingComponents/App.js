import React from "react"
import Joke from "./Joke"
import JokesData from "./JokesData"

function App() {

    const jokeComponents = JokesData.map(item => <Joke question={item.question} punchline={item.punchline} />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default App