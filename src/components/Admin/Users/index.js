import React, { Component } from 'react';
import Loading from './../../Loading'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Users extends Component {

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
        let { _get_all_users } = this.props
        _get_all_users()
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
        console.log(this.props.user)
        let { is_loading, data_users } = this.props.user
        if(data_users !== null) {
            let pages = parseInt(parseInt(data_users.length) / 9)
            if(this.state.total_page !== pages) {
                this.handler_total(pages)
            }
        }
        var users = data_users !== null 
        ?  data_users.slice(this.state.page * 9 - 9, this.state.page * 9).map(i => {
                return(
                    <tr>
                        <th scope="row">{i.id}</th>
                        <td>{i.email}</td>
                        <td>{i.adress}</td>
                        <td>{i.phone}</td>
                        <td className="text-center">
                            <Link to={`/admin/users/${i.id}`}>
                                <button class="btn btn-outline-info">Edit
                                </button>
                            </Link> 
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
                                <h2 className="title-1">All User</h2>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <table className="table table-bordered table-striped">
                                    <thead  className="thead-dark">
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">option</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users}
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

export default Users;