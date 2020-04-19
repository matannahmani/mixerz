import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Session extends Component{
    state = {
        page: 0,
        email: null,
        password: null,
        signup: {}
    }

    render() {
        return (
            <Link to = {{pathname: '/signin', state: this.state}}><h1>HELLO</h1></Link>
            // <Link to={{pathname: '/signin', state: {hello: 'hello'}}}>test</Link>
            )
    }
}
export default Session;