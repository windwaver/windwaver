import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstname: ""
        }
    }

    handChange(){

    }

    render() {
        return (
            <form>
                <input type="text" placeholder="First Name" onChange={this.handleChange} />
            </form>
        )
    }
}

export default App 