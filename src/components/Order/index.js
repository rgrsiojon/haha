import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Order extends Component {
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
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="overview-wrap">
                                    <h2 className="title-1">Thông tin đơn hàng</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 m-t-30">
                                <div className="card">
                                    <div className="card-header">
                                        <strong>Thông tin cá nhận của bạn</strong>
                                    </div>
                                    <div className="card-body card-block">
                                        <div className="form-group">
                                            <label htmlFor="company" className=" form-control-label">Tên của bạn</label>
                                            <input type="text" id="company" placeholder="Enter your name" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vat" className=" form-control-label">Email</label>
                                            <input type="text" id="vat" placeholder="Email" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="country" className=" form-control-label">Số điện thoại</label>
                                            <input type="text" id="" placeholder="Số điện thoại" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="street" className=" form-control-label">Xã/Phường</label>
                                            <input type="text" id="street" placeholder="Xã/Phường" className="form-control" />
                                        </div>
                                        <div className="form-group">

                                            <div className="form-group">
                                                <label htmlFor="city" className=" form-control-label">Quận/Huyện</label>
                                                <input type="text" id="city" placeholder="Quận/Huyện" className="form-control" />
                                            </div>


                                            <div className="form-group">
                                                <label htmlFor="postal-code" className=" form-control-label">Tỉnh/Thành phố</label>
                                                <input type="text" id="postal-code" placeholder="Tỉnh/Thành phố" className="form-control" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="table-responsive table--no-card m-t-30">
                                    <table className="table table-borderless table-striped table-earning">
                                        <thead>
                                            <tr>
                                                <th>Tên</th>
                                                <th>Số lượng</th>
                                                <th>Giá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Macbook pro 2016</td>
                                                <td>1</td>
                                                <td className="text-right">$22.00</td>
                                            </tr>
                                            <tr>
                                                <td>2018-09-28 01:22</td>
                                                <td>100397</td>
                                                <td className="text-right">$22.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright">
                                    <p>Copyright © 2018 rgrsiojon. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Order.propTypes = {

};

export default Order;