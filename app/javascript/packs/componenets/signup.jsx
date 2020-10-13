import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component{
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
            alert("Email or Password\nis too short");
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
                <div className="signup-form">
                    <h2>Email:</h2>
                    <input type="text" placeholder="email"/>
                    <h2>Password:</h2>
                    <input type="text" placeholder="password"/>
                    <h2>Name:</h2>
                    <input type="text" placeholder="email"/>
                </div>
            </div>
        )
    }
}
export default Signup;
