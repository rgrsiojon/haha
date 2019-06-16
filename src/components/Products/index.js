import React, { Component } from 'react';
import Loading from './../Loading'

class Products extends Component {
    constructor(props) {
        super(props);
        this.handler_click_add_to_cart = this.handler_click_add_to_cart.bind(this)
    }
    // onHandlerProduct
    handler_click_add_to_cart(data) {
        this.props.onHandlerProduct(data)
    }   
    render() {
        var data_product = null
        if(this.props.data !== null) {
            data_product = this.props.data.map(i => {
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