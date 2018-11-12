import React, { Component } from 'react'

export default class Counter extends Component {

    render() {
        const { value, onInCreaseClick, onDeCreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onInCreaseClick}>Increase</button>
                <button onClick={onDeCreaseClick}>Decrease</button>
            </div>
        )
    }
}
