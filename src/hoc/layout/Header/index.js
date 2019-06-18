import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './../Footer'
import { connect } from "react-redux";
import { handler_search } from './../../../store/actions/search'
import { logout } from './../../../store/actions/auth'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Header extends Component {
    constructor(props) {
        super(props)
        this.handler_change_input_search = this.handler_change_input_search.bind(this)
        this.handler_logout = this.handler_logout.bind(this)
    }

    handler_change_input_search(e) {
        let { _handler_search } = this.props
        _handler_search(e.target.value)
    }

    handler_logout() {
        let { logout } = this.props
        logout()
    }

    render() {
        var auth = cookies.get('auth')
        return (
            <div>
                <header id="header">{/*header*/}
                    <div className="header_top">{/*header_top*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="contactinfo">
                                        <ul className="nav nav-pills">
                                            <li><a href="#"><i className="fa fa-phone" /> +2 95 01 88 821</a></li>
                                            <li><a href="#"><i className="fa fa-envelope" /> webshop@domain.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="social-icons pull-right">
                                        <ul className="nav navbar-nav">
                                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                            <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/*/header_top*/}
                    <div className="header-middle">{/*header-middle*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="logo pull-left">
                                        <h1><span>E</span>-Mac</h1>     
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="shop-menu pull-right">
                                        <ul className="nav navbar-nav">
                                            <li>
                                                <Link to="/profile"><i className="fa fa-crosshairs" /> Account</Link>
                                            </li>
                                            <li>
                                                <Link to="/order"><i className="fa fa-crosshairs" /> Order</Link>
                                            </li>
                                            <li>
                                                <Link to="/cart"><i className="fa fa-shopping-cart" /> Cart</Link>
                                            </li>
                                            <li>
                                                {
                                                    auth !== undefined 
                                                    ? <a onClick={this.handler_logout} href><i className="fa fa-lock" /> Logout</a>
                                                    : <Link to="/login"><i className="fa fa-lock" /> Login</Link>
                                                }
                                                
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/*/header-middle*/}
                    <div className="header-bottom">{/*header-bottom*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-9">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className="mainmenu pull-left">
                                        <ul className="nav navbar-nav collapse navbar-collapse">
                                            <li>
                                                <Link className="active" to="/">Home</Link>
                                            </li>
                                            <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down" /></a>
                                                <ul role="menu" className="sub-menu">
                                                    <Link className="/cart" to="/">Cart</Link>
                                                    <Link className="/login" to="/">Login</Link>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down" /></a>
                                                <ul role="menu" className="sub-menu">
                                                    <li><a href="blog.html">Blog List</a></li>
                                                    <li><a href="blog-single.html">Blog Single</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="404.html">404</a></li>
                                            <li><a href="contact-us.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="search_box pull-right">
                                        <input onChange={this.handler_change_input_search} type="text" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}

const map_state_to_props = state => ({
    product: state.product,
    carts: state.carts,
    search: state.search,
    user: state.user
})

const map_dispatch_to_props = dispatch => ({
    _handler_search: function(content) {
        dispatch(handler_search(content))
    },
    logout: function() {
        dispatch(logout())
    }
})

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(Header);
