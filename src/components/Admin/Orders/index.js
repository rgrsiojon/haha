import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";        

class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            total_page: 0
        }
        this.handler_next = this.handler_next.bind(this)
        this.handler_prev = this.handler_prev.bind(this)
        this.handler_total = this.handler_total.bind(this)
    }

    componentDidMount() {
        let { _get_all_orders } = this.props
        _get_all_orders()
    }

    handler_prev() {
        if(this.state.page === 1) {
            return false
        } else {
            this.setState(state => {
                return {
                    page: state.page - 1
                }
            })
        }
    }

    handler_next() {
        if(this.state.page > this.state.total_page) {
            return false
        } else {
            this.setState(state => {
                return {
                    page: state.page + 1
                }
            })
        }
    }

    handler_total(pages){
        this.setState({
            total_page: pages
        })
    }


    render() {
        let order = this.props.order
        if(order.data_all_order !== null) {
            let pages = parseInt(parseInt(order.data_all_order.length) / 9)
            if(this.state.total_page !== pages) {
                this.handler_total(pages)
            }
        }

        let orders = order.data_all_order !== null ? order.data_all_order.slice(this.state.page * 9 - 9, this.state.page * 9).map(i => {
            return (<tr>
                <th scope="row">{i.id}</th>
                <td>{i.phone}</td>
                <td>{i.shipping_address}</td>
                <td>
                    <Shiping status={i.status}></Shiping>
                </td>
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
                                        {orders}
                                    </tbody>
                                </table>   
                            </div>
                            <div className="col-sm-12 text-center m-b-25">
                                <div>
                                    <a onClick={this.handler_prev} className="left recommended-item-control my--recommended-item-control-left" href="#recommended-item-carousel" data-slide="prev">
                                        <i className="fa fa-angle-left" />
                                    </a>
                                    <a className="cart_quantity_up">{this.state.page}</a>
                                    <a onClick={this.handler_next} className="left recommended-item-control my--recommended-item-control-right" href> <i className="fa fa-angle-right"></i> </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function Shiping(props) {
    return (
        <>
            {
                props.status === 0 && <span style={{backgroundColor: "#ffc107"}} class="badge badge-pill badge-danger">Chưa giao hàng</span>
            }
            {
                props.status === 1 && <span style={{backgroundColor: "#007bff"}} class="badge badge-pill badge-danger">Đang giao hàng</span>
            }
            {
                props.status === 2 && <span style={{backgroundColor: "#28a745"}} class="badge badge-pill badge-danger">Đã giao hàng</span>
            }
        </>
    )
} 

export default Orders;