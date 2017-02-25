import React from 'react'
import { Link } from 'react-router'
import setTitle from './setTitle'

@setTitle((props) => {
    if(!props.user) return 'Loading profile...'

    return `${props.user.name}'s Profile`
})
class Profile extends React.Component {
    render() {
        return <Link to="/">Go to home</Link>
    }
}

export default Profile
