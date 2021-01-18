import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["a","b","c"]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 &&
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App