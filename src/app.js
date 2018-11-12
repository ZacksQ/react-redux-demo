import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './router'

class Apps extends Component {

    render() {
        return (
            <App/ >
        )
    }
}

ReactDOM.render(<Apps/>, document.getElementById("root"))