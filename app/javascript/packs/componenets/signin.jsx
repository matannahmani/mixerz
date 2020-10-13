import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

class Signin extends Component{
    state = {
        email: null,
        password: null
    }
    componentDidMount () {
        console.log(this.props);
        if (this.props.location.logged === true) this.props.history.push('/');
        const email = document.getElementById('email');
        const password = document.getElementById('password')
        if (this.state.email !== null) email.value = this.state.email;
        if (this.state.password !== null) password.value = this.state.password;
    }

    login = async() => {
        const email = document.getElementById('email');
        const password = document.getElementById('password')
        if (email.value.length < 3 || password.value.length < 6){
            toast.warn("Please write more than 4 letters", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
        }else{
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        const response2 = await fetch(`${location.origin}/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'X-CSRF-Token': csrf,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: {email: email.value,password: password.value}}) // body data type must match "Content-Type" header
          });
          if (response2.status !== 200)
          {
            toast.error("Email / Password don't match", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
          }
          else{
            toast.success("Redirecting in 2 seconds", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
                console.log(this.props);
                await new Promise(r => setTimeout(r, 2000));
                this.props.location.logHandler()
                this.props.history.push('/');
          }
        }
    }

    render () {
        return (
            <div className="center">
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnVisibilityChange draggable pauseOnHover/>
                <div className="login-form">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="text" id="email" placeholder="email"/>
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" id="password" placeholder="password"/>
                    <div className="session">
                        <button onClick={this.login} className="signin">Sign In</button>
                        <Link to={{pathname: '/signup',loginstate: { loginstate: this.state }}}>
                        <button className="signup">Sign Up</button>
                        </Link>
                        <button className="forgotpassword">Forgot Password</button>
                        {/* <span className="iconify" data-icon="ant-design:login-outlined" data-inline="false"></span>
                        <span className="iconify" data-icon="bx:bxs-user-plus" data-inline="false"></span>
                        <span className="iconify" data-icon="mdi:lock-reset" data-inline="false"></span> */}
                    </div>
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
