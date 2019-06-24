import React, { Component } from 'react';
import Loading from './../../Loading'
import UserInfo from './../User_info'

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            product: null
        }
    }
    componentDidMount() {
        let { _get_order_by_id } = this.props
        _get_order_by_id(this.props.id)
    }
    //     array_id: (3) [{…}, {…}, {…}]
    // id: "5"
    // phone: ""
    // shipping_address: "208 nguyen huu canh"
    // status: 0
    // store_id: "1"
    // total_pay: 37500000000000000
    // user_id: "1"
    render() {
        console.log(this.props)
        let { is_loading, data, data_order, is_created } = this.props.order

        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        {
                            is_loading === true && <Loading></Loading>
                        }
                        {
                            data_order !== null && <>
                                <div className="col-md-6">
                                    <div className="row form-group">
                                        <div className="col col-md-3">
                                            <label htmlFor="text-input" className=" form-control-label">Total pay</label>
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <input value={`${data_order.total_pay} VND`} type="text"  id="text-input" name="text-input" placeholder="Total Pay" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col col-md-3">
                                            <label htmlFor="text-input" className=" form-control-label">Phone of order</label>
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <input value={data_order.phone} type="text"  id="text-input" name="text-input" placeholder="Phone" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col col-md-3">
                                            <label htmlFor="text-input" className=" form-control-label">Shipping Address</label>
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <input value={data_order.shipping_address} type="text"  id="text-input" name="text-input" placeholder="Address" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <UserInfo id= {data_order.user_id}></UserInfo>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;