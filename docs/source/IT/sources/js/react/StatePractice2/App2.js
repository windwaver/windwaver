import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            <div>
                <h1>You are currently logged (in/out)</h1>
            </div>
        )
    }
}

export default App