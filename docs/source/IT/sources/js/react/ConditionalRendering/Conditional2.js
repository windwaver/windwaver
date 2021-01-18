import React from "react"

function Conditional(props) {
    if (props.isLoading === true) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div>
                <h1>Some cool stuff about conditional rendering</h1>
            </div>
        )
    }
}

export default Conditional