import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";        

class Orders extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { _get_all_orders } = this.props
        _get_all_orders()
    }

    render() {
        console.log(this.props)
        let order = this.props.order
        let oeders = order.data_all_order !== null ? order.data_all_order.map(i => {
            return (<tr>
                <th scope="row">{i.id}</th>
                <td>{i.phone}</td>
                <td>{i.shipping_address}</td>
                <td>{i.status}</td>
                <td>{i.store_id}</td>
                <td>{i.total_pay}</td>
                <td className="text-center">
                    <Link to={`/admin/orders/${i.id}`}>
                        <button class="btn btn-outline-info">Chi tiết
                        </button>
                    </Link> 
                    <button type="button" className="close" aria-label="Close">
                        <span  onClick={()=> {
                            // this.handler_delete_product(i.id)   
                        }} aria-hidden="true">&times;</span>
                    </button>
                </td>
                
            </tr>)
        }) : <div></div>
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row m-b-45">
                            <div className="col-md-12">
                            <div className="overview-wrap">
                                <h2 className="title-1">Orders</h2>
                            </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <table className="table table-bordered table-striped">
                                    <thead  className="thead-dark">
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Shipping address</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Total pay</th>
                                            <th scope="col">option</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {oeders}
                                    </tbody>
                                </table>   
                            </div>
                            <div className="col-sm-12 text-center m-b-25">
                                {/* <div>
                                    <a onClick={this.handler_prev} className="left recommended-item-control my--recommended-item-control-left" href="#recommended-item-carousel" data-slide="prev">
                                        <i className="fa fa-angle-left" />
                                    </a>
                                    <a className="cart_quantity_up">{this.state.page}</a>
                                    <a onClick={this.handler_next} className="left recommended-item-control my--recommended-item-control-right" href> <i className="fa fa-angle-right"></i> </a>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Orders;