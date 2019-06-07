import React, { Component } from 'react';

class SingIn extends Component {
    constructor(props) {
        super(props);
        this.handel_click_button_login = this.handel_click_button_login.bind(this)
    }
    handel_click_button_login() {
        let { login } = this.props
        login("hacnguyen1412@gmail.com", "1234567")
    }
    render() {
        
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form validate-form">
                                <span className="login100-form-title p-b-26">
                                    Welcome
                                </span>
                                <span className="login100-form-title p-b-48">
                                    <i className="zmdi zmdi-font" />
                                </span>
                                <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                    <input className="input100" type="text" name="email" />
                                    <span className="focus-input100" data-placeholder="Email" />
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Enter password">
                                    <span className="btn-show-pass">
                                        <i className="zmdi zmdi-eye" />
                                    </span>
                                    <input className="input100" type="password" name="pass" />
                                    <span className="focus-input100" data-placeholder="Password" />
                                </div>
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn" />
                                        <button className="login100-form-btn" onClick={this.handel_click_button_login}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center p-t-115">
                                    <span className="txt1">
                                        Don’t have an account?
                                    </span>
                                    <a className="txt2" href="/#/signup">
                                        Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dropDownSelect1" />
            </div>
        );
    }
}

export default SingIn;