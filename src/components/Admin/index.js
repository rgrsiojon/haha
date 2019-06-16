import React, { Component } from 'react';
import Loading from './../Loading'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Admin extends Component {

    constructor(props) {
        super(props)
        this.handler_delete_product = this.handler_delete_product.bind(this)
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

    render() {
        let { is_loading, data, is_deleted } = this.props.product

        let products = is_loading !== false ? <div></div> : data.map(i => {
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
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Admin;