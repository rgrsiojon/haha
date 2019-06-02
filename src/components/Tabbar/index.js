import React, { Component } from 'react';
import Header from './../Header'
import Filter from './../Filter'
import PropTypes from 'prop-types';
import { PAGE } from './../../Common'
import OrderBar from './../Order/orderBar'


class Tabbar extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    rederPage(page) {
        switch (page) {
            case PAGE.ORDER:
                return <OrderBar/>
            case PAGE.HOME:
                return <Filter></Filter>
        }
    }

    render() {
        let page = this.props.page
        return (
            <div className="page-wrapper">
            <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">
                    <a href="#">
                        <div className="login100-form-title ">
                            <i className="zmdi zmdi-font " /> Haha
                        </div>
                    </a>
                </div>
                <div className="menu-sidebar__content js-scrollbar1">
                    {this.rederPage(page)}
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

Tabbar.propTypes = {

};

export default Tabbar;