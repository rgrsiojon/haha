import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderBar extends Component {
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

    render() {
        return (
            <div className="filter--name navbar-sidebar">
                <div className="col-md-12 m-t-25">
                    <h2 class="title-3">Thanh toán</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Thanh toán thẻ tín dụng
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Thanh toán khi nhận hàng 
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

OrderBar.propTypes = {

};

export default OrderBar;