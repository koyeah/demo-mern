import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <label>Account:
                    <input type="text" name="account" placeholder="Account" />
                </label>
                <label>Password:
                    <input type="password" name="password" placeholder="password" />
                </label>
                <button>Login</button>
            </div>
        )
    }
}

export default Login;