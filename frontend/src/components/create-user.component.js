import React, { Component } from 'react'

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        })
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}
