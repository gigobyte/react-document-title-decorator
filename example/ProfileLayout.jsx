import React from 'react'
import Profile from './Profile'

class ProfileLayout extends React.Component {
    state = { user: null }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                user: { name: 'Gigobyte' }
            })
        }, 500)
    }

    render() {
        console.log(this.state)
        
        return <Profile user={this.state.user} />
    }
}

export default ProfileLayout;
