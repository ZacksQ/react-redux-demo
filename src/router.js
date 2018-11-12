import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import { store } from './redux/store'

export default class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Loadable({ loader: () => import('./app/app'), loading() { return (<div>123</div>) } })}></Route>
                        <Route path='/styledcomponent' component={Loadable({ loader: () => import('./styledcomponent/StyledComponent'), loading() { return (<div>123</div>) } })}></Route>
                        <Route path='/redux' component={Loadable({ loader: () => import('./redux/index'), loading() { return (<div>123</div>) } })}></Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}