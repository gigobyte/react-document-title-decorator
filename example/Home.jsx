import React from 'react'
import { Link } from 'react-router'
import setTitle from './setTitle'

@setTitle(() => 'Home')
class Home extends React.Component {
    render() {
        return <Link to="/profile">Go to profile</Link>
    }
}

export default Home
