import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is_show_menu: false
        }

        this.handler_show_tab_menu = this.handler_show_tab_menu.bind(this)

    }

    handler_show_tab_menu() {
        this.setState(state => ({
            is_show_menu: !state.is_show_menu
        }))
    }

    render() {
        console.log(this.props.auth)
        let { id, avatar, email } = this.props.auth.data
        let class_dropdown = this.state.is_show_menu ? "show-dropdown" : "" 

        console.log(this.state)

        return (
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            <form className="form-header" action method="POST">
                                <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas & reports..." />
                                <button className="au-btn--submit" type="submit">
                                    <i className="zmdi zmdi-search" />
                                </button>
                            </form>
                            <div className="header-button">

                                <div className="account-wrap">
                                    <div className = {`account-item clearfix js-item-menu ${class_dropdown}`}>
                                        <div className="image">
                                            <img src={avatar} alt="Webshop" />
                                        </div>
                                        <div onClick={this.handler_show_tab_menu} className="content">
                                            <a className="js-acc-btn" href={()=> false}>{email}</a>
                                        </div>

                                        <div className="account-dropdown js-dropdown"> 
                                        
                                            <div className="info clearfix">
                                                <div className="image">
                                                    <a href="#">
                                                        <img src={avatar} alt="Webshop" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="name">
                                                        <a href="#">{email}</a>
                                                    </h5>
                                                    <span className="email">{email}</span>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__body">
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-account" />Account</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-settings" />Setting</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-money-box" />Billing</a>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__footer">
                                                <a href="#">
                                                    <i className="zmdi zmdi-power" />Logout</a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;