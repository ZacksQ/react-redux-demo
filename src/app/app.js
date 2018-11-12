import './a.scss'
import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        // window.location.href="http://h5-test.chelun.com/#/borrowing"
        // const promise = new Promise((resolve, reject) => {
        //     console.log('Promise')
        //     if (1 == 1) {
        //         resolve(1)
        //     } else {
        //         reject(0)
        //     }
        // })
        // .then((value) => {
        //     console.log(value)
        // }, (value) => {
        //     console.log(value)
        // })
        // promise.then(()=>{
        //     console.log('resolved.')
        // })
        // console.log("hi")

        // new Promise(resolve =>{
        //     resolve(1);
        //     Promise.resolve().then(()=> console.log(2));
        //     console.log(4)
        // }).then(t=>console.log(t));
        // console.log(3)

        document.getElementById("run").addEventListener("click", this.run.bind(this), false)

        // const p2 = new Promise((resolve, reject) => {
        //     console.log('p2')
        //     resolve(2)
        // })

        // Promise.all([this.p1(), p2])
        //     .then(value => {
        //         console.log(value)
        //     })
        //     .catch(e => {
        //         console.log('error', e)
        //     })
    }

    process() {
        if (this.pw < 100) {
            this.pw++;
            document.getElementById("xx").style.width = this.pw + '%'
            requestAnimationFrame(this.run.bind(this))
        }
    }
    run() {
        requestAnimationFrame(this.process.bind(this))
    }

    // p1() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log('p1')
    //             resolve(1)
    //         }, 3000)
    //     })
    // }

    render() {
        return (
            <div>
                <div id="xx"></div>
                <button id="run">Run阿</button>
            </div>
        )
    }
}