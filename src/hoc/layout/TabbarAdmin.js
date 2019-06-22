import React, { Component } from 'react';
import Header from './../../containers/Admin/Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './TabbarAdmin.css'

class TabbarAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is_taped_product: false
        } 
        this.handler_tap_product = this.handler_tap_product.bind(this)
    }

    handler_tap_product(){
        console.log("hah")
        this.setState(state => {
            return {
                is_taped_product: !state.is_taped_product
            }
        })
    }

    render() {
        let clas_menu_product = this.state.is_taped_product ? "block" : ""
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
                                    Dashboard
                                </li>

                                <li>
                                    <Link to="/admin/users">Users</Link>
                                </li>
                                <li onClick={this.handler_tap_product} class="has-sub" style={{ cursor: "pointer"}} >
                                        Product
                                    <ul  class="navbar-mobile-sub__list list-unstyled js-sub-list" style={{display: clas_menu_product}}>
                                        <li>
                                            <Link to="/admin/product/macbook">All Product</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/product/macbook/create-product">Create</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/admin/orders">Order</Link>
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