import React, { Component } from 'react';
import Header from './../../containers/Admin/Header'

class TabbarAdmin extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="page-wrapper">
                <aside className="menu-sidebar d-none d-lg-block">
                    <div className="logo">
                        <a href="#">
                            <div className="login100-form-title">
                                <i className="zmdi zmdi-font" />
                            </div>
                        </a>

                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="list-unstyled navbar__list">
                                <li className="active has-sub">
                                    <a className="js-arrow" href="#">
                                        Dashboard
                                        </a>
                                </li>

                                <li>
                                    <a href="#">
                                        Users
                                        </a>
                                </li>
                                <li class="has-sub">
                                    <a class="js-arrow open" href="#">
                                        Product</a>
                                    <ul class="navbar-mobile-sub__list list-unstyled js-sub-list" style={{display: 'block'}}>
                                        <li>
                                            <a href="index.html">Macbook</a>
                                        </li>
                                        <li>
                                            <a href="index2.html">Iphone</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        Posts
                                        </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="page-container">
                    <Header/>
                    {this.props.children}
                </div>
                
            </div>
        );
    }
}

export default TabbarAdmin;