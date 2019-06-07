import React, { Component } from 'react';
import Loading from './../Loading'

class SingIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handel_click_button_login = this.handel_click_button_login.bind(this)
        this.handel_change_input_email = this.handel_change_input_email.bind(this)
        this.handel_change_input_password = this.handel_change_input_password.bind(this)
    }
    handel_click_button_login() {
        let { login } = this.props
        // login(this.state.email, this.state.password)
        login("hacnguyen1412@gmail.com", "1234567")
    }

    handel_change_input_email(event) {
        var value = event.target.value
        this.setState({
            email: value
        });
    }

    handel_change_input_password(event) {
        var value = event.target.value
        this.setState({
            password: value
        });
    }

    render() {
        //@ alert-validate
        var class_email_input_is_val = (this.state.email != "") ? "has-val" : "";
        var class_password_input_is_val = (this.state.password != "") ? "has-val" : "";
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

                                <div onChange={this.handel_change_input_email} className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                    <input className={`input100 ${class_email_input_is_val}`} type="text" name="email" />
                                    <span className="focus-input100" data-placeholder="Email" />
                                </div>

                                <div  onChange={this.handel_change_input_password} className="wrap-input100 validate-input" data-validate="Enter password">
                                    <span className="btn-show-pass">
                                        <i className="zmdi zmdi-eye" />
                                    </span>
                                    <input className={`input100 ${class_password_input_is_val}`} type="password" name="pass" />
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
                                        {/* you can change some thing in here */}
                                    </span>
                                    <a className="txt2" href="/#/signup">
                                        {/* you can change some thing in here */}
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