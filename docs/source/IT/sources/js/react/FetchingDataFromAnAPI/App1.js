
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount(){
        fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App