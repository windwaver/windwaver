import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
        }
    }

        render() {
        return (
            <div>
                <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
            </div>
        )
    }
}

export default App