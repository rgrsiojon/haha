import React, { Component } from 'react';
import Loading from './../Loading'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Admin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            total_page: 0
        }
        this.handler_delete_product = this.handler_delete_product.bind(this)
        this.handler_next = this.handler_next.bind(this)
        this.handler_prev = this.handler_prev.bind(this)
        this.handler_total = this.handler_total.bind(this)
    }

    componentDidMount() {
        let { get_all_products } = this.props
        get_all_products()
    }

    handler_delete_product(id) {
        let { delete_product } = this.props
        delete_product(id)
    }

    handler_update_product(id) {
        let { get_product_by_id } = this.props
        get_product_by_id(id)
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
        let { is_loading, data, is_deleted } = this.props.product
        if(data !== null) {
            let pages = parseInt(parseInt(data.length) / 9)
            if(this.state.total_page !== pages) {
                this.handler_total(pages)
            }
        }
        
        var products = data !== null 
        ?  data.slice(this.state.page * 9 - 9, this.state.page * 9).map(i => {
                return(
                    <tr>
                        <th scope="row">{i.id}</th>
                        <td>{i.title}</td>
                        <td>{i.cpu}</td>
                        <td>{i.ram}</td>
                        <td>{i.disk}</td>
                        <td>{i.display}</td>
                        <td>{i.color}</td>
                        <td>{i.gpu}</td>
                        <td>{i.amount}</td>
                        <td className="text-right">{i.price}</td>
                        <td className="text-center" >{i.store_id}</td>
                        <td className="text-center">
                            <a href={"/#/admin/product/macbook/update-product/" + i.id}>
                                <button onClick={()=> {
                                    this.handler_update_product(i.id)
                                }} type="button" class="btn btn-outline-info">Edit
                                </button>
                            </a>
                            <button type="button" className="close" aria-label="Close">
                                <span  onClick={()=> {
                                    this.handler_delete_product(i.id)   
                                }} aria-hidden="true">&times;</span>
                            </button>
                        </td>
                        
                    </tr>
                )      
            })
        
        : <div></div>
        
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                {
                                    is_loading !== false ?<Loading></Loading> : <div></div>
                                }
                            </div>
                        </div>
                        <div className="row m-b-45">
                            <div className="col-md-12">
                            <div className="overview-wrap">
                                <h2 className="title-1">All Product</h2>
                                <Link to="/admin/product/macbook/create-product">
                                    <button className="au-btn au-btn-icon au-btn--blue">
                                        <i className="zmdi zmdi-plus" />add
                                    </button>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <table className="table table-bordered table-striped">
                                    <thead  className="thead-dark">
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">CPU</th>
                                            <th scope="col">RAM</th>
                                            <th scope="col">Disk</th>
                                            <th scope="col">Display</th>
                                            <th scope="col">Color</th>
                                            <th scope="col">GPU</th>
                                            <th scope="col">Amout</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Store Id</th>
                                            <th scope="col">option</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products}
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

        );
    }
}

export default Admin;