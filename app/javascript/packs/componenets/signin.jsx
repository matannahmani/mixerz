import React, { Component } from 'react'

class Signin extends Component{
    state = {
        email: null,
        password: null
    }
    componentDidMount () {
        const email = document.getElementById('email');
        const password = document.getElementById('password')
        if (this.state.email !== null) email.value = this.state.email;
        if (this.state.password !== null) password.value = this.state.password;
        console.log(this.props);
    }

    login = async() => {
        const email = document.getElementById('email');
        const password = document.getElementById('password')
        if (email.value.length < 3 || password.value.length < 6){
            alert("Email or Password\nis too short");
        }else{
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        response2 = await fetch(`${location.origin}/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'X-CSRF-Token': csrf,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: {email: email.value,password: password.value}}) // body data type must match "Content-Type" header
          });
        }
    }

    render () {
        return (
            <div className="center">
                <div className="login-form">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password"/>
                    <div className="session">
                        <button onClick={this.login} className="signin">Sign In<span className="iconify" data-icon="ant-design:login-outlined" data-inline="false"></span></button>
                        <button className="signup">Sign Up<span className="iconify" data-icon="bx:bxs-user-plus" data-inline="false"></span></button>
                        <button className="forgotpassword">Forgot Password<span className="iconify" data-icon="mdi:lock-reset" data-inline="false"></span></button>
                    </div>
                    <h2>Sign in using</h2>
                    <div className="oauth">
                        <button className="facebook-sign"><span className="iconify" data-icon="logos:facebook" data-inline="false"></span></button>
                        <button className="google-sign"><span className="iconify" data-icon="flat-color-icons:google" data-inline="false"></span></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signin;
