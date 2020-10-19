import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import login.css from './components/Login/login.css';


export default class Login extends Component {
    render() {
        return (
            <div className="login-reg-panel">
                <div className="white-panel">
                    <div class="login-show">
                        <h2>LOGIN</h2>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="button" value="Login" />
                        <Link to="/" >Forgot password?</Link>
                    </div>
                </div>
            </div>

        );
    }
}
