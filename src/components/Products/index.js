import React, { Component } from 'react';
import Loading from './../Loading'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            total_page: 0
        }
        this.handler_click_add_to_cart = this.handler_click_add_to_cart.bind(this)
        this.handler_next = this.handler_next.bind(this)
        this.handler_prev = this.handler_prev.bind(this)
    }
    // onHandlerProduct
    handler_click_add_to_cart(data) {
        this.props.onHandlerProduct(data)
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
        if(this.state.page === this.state.total_page) {
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
        var data_product = null
        // var data_demo = null
        
        if(this.props.data !== null) {
            console.log(this.props.data.slice(0, 9))
            console.log(this.props.data)
            switch (this.state.page) {
                case 1:
                    
            }
            let pages = parseInt(parseInt(this.props.data.length) / 9)
            if(this.state.total_page !== pages) {
                this.handler_total(pages)
            }
            data_product = this.props.data.slice(this.state.page * 9 - 9, this.state.page * 9).map(i => {
                return <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={i.avatar} alt />
                                <h2>{i.price}</h2>
                                <p>{i.title}</p>
                                <button onClick={() => {
                                    this.handler_click_add_to_cart(i)
                                }} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</button>
                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                <h2>{i.price}</h2>
                                <p>{i.title}</p>
                                <button onClick={() => {
                                    this.handler_click_add_to_cart(i)
                                }} className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</button>
                                </div>
                            </div>
                            {/* <img src="images/home/sale.png" class="new"></img> */}
                            <img src="images/home/new.png" class="new"></img>
                        </div>
                        <div className="choose">
                            <ul className="nav nav-pills nav-justified">
                                <li><a href="#"><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                <li><a href="#"><i className="fa fa-plus-square" />Add to compare</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            })
            

            return (
                <>
                    {data_product}
                    <div className="col-sm-12 text-center m-b-25">
                        <div>
                            <a onClick={this.handler_prev} className="left recommended-item-control my--recommended-item-control-left" href="#recommended-item-carousel" data-slide="prev">
                                <i className="fa fa-angle-left" />
                            </a>
                            <a className="cart_quantity_up">{this.state.page}</a>
                            <a onClick={this.handler_next} className="left recommended-item-control my--recommended-item-control-right" href> <i className="fa fa-angle-right"></i> </a>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <Loading></Loading>
                </>
            );
        }
    }
}

export default Products;