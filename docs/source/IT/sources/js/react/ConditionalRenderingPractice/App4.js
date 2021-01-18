import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        console.log("I'm working")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>LOG IN</button>
            </div>
        )
    }
}

export default App