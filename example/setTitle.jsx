import React from 'react'

const setTitle = (getTitle) => (WrappedComponent) => {
    return class extends React.Component {
        updateTitle = (props) => {
            const title = getTitle(props)
            if(title) {
            document.title = title
            }
        }

        componentDidMount() {
            this.updateTitle(this.props)
        }

        componentWillReceiveProps(props) {
            this.updateTitle(props)
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export default setTitle
