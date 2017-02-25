import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import Profile from './Profile'
import Home from './Home'
import ProfileLayout from './ProfileLayout'

const app = document.querySelector('.render-target')

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/profile" component={ProfileLayout} />
    </Router>, app
)
