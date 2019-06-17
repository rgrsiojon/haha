import React, { Component } from 'react';
import Loading from './../Loading'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            is_keep_in: false
        }
        this.handler_input_email = this.handler_input_email.bind(this)
        this.handler_input_password = this.handler_input_password.bind(this)
        this.handler_register = this.handler_register.bind(this)
        this.handler_login = this.handler_login.bind(this)
        this.handler_kepp_in = this.handler_kepp_in.bind(this)
    }

    handler_input_email(e) {
        this.setState({
            email: e.target.value,
        })
    }

    handler_input_password(e) {
        this.setState({
            password: e.target.value,
        })
    }

    handler_register() {
        let { _register } = this.props
        _register(this.state)
    }

    handler_login() {
        let { login } = this.props
        login(this.state.email, this.state.password)
    }

    handler_kepp_in() {
        this.setState(state => {
            return {
                is_keep_in: !state.is_keep_in
            }
        } )
    }

    render() {
        let { is_loading } = this.props.auth
        console.log(this.props)
        return (
            <>
                {
                    is_loading 
                    ? <Loading></Loading> 
                    : <section id="form">{/*form*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 col-sm-offset-1">
                                    <div className="login-form">{/*login form*/}
                                        <h2>Login to your account</h2>
                                        <form>
                                            <input onChange={this.handler_input_email} type="email" placeholder="Email Address" />
                                            <input onChange={this.handler_input_password} type="password" placeholder="Password" />
                                            <span>
                                            <input onClick={this.handler_kepp_in} type="checkbox" className="checkbox" />
                                                Keep me signed in
                                                </span>
                                            <button onClick={this.handler_login} className="btn btn-default">Login</button>
                                        </form>
                                    </div>{/*/login form*/}
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="or">OR</h2>
                                </div>
                                <div className="col-sm-4">
                                    <div className="signup-form">{/*sign up form*/}
                                        <h2>New User Signup!</h2>
                                        <form>
                                            <input onChange={this.handler_input_email} type="email" placeholder="Email Address" />
                                            <input onChange={this.handler_input_password} type="password" placeholder="Password" />
                                            <button onClick={this.handler_register} className="btn btn-default">Signup</button>
                                        </form>
                                    </div>{/*/sign up form*/}
                                </div>
                            </div>
                        </div>
                    </section>
                }
                
            </>
        )
    }
}

export default Login;
