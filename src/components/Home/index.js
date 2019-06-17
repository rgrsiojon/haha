import React, { Component } from 'react';
import Carousel from './../Carousel'
import Products from './../Products'
import Filter from './../Filter'
import Loading from './../Loading'
import Alert from './../Alert'

class Recommended extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let product_top = this.props.data
        return product_top !== null ? product_top.slice(5, 8).map(i => {
            return <> 
                 <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={i.avatar} alt />
                                <h2>{i.price}</h2>
                                <p>{i.title}</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }): <div></div>
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.hanler_product = this.hanler_product.bind(this)
    }

    componentDidMount() {
        let { get_all_products, _get_top_product } = this.props
        get_all_products()
        _get_top_product()
    }

    hanler_product(data) {
        let { _create_carts } = this.props
        _create_carts(data)
    }

    render() {
        let { is_loading, data, product_top, is_created } = this.props.product  
        let { _create_cart_end } = this.props
        
        let cart = this.props.carts
        console.log(cart)
        if(cart.is_created === true) {
            _create_cart_end()
        }
        let alert = cart.is_loading === true 
                    ? <Alert class="my--alert--secon">Add product to cart is success</Alert> 
                    : <div></div>
        return (
            <>
                {alert}
                <section id="slider">{/*slider*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Carousel data={product_top}></Carousel>  
                            </div>
                        </div>
                    </div>
                </section>{/*/slider*/}
                <section>
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-3">
                                <Filter></Filter>
                            </div>


                            <div className="col-sm-9 padding-right">
                                <div className="features_items">
                                    <h2 className="title text-center">Features Items</h2>
                                    {
                                        is_loading === true ?  <Loading></Loading> : <div></div>   
                                    }
                                    {
                                        is_loading === false ?  <Products onHandlerProduct={this.hanler_product} data = {data}></Products> : <div></div>
                                    }
                                </div>
                            
                                <div className="recommended_items">{/*recommended_items*/}
                                    <h2 className="title text-center">recommended items</h2>
                                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <Recommended data={product_top} ></Recommended>
                                            </div>
                                            <div className="item">
                                                <Recommended data={product_top} ></Recommended>
                                            </div>
                                        </div>
                                        <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                                            <i className="fa fa-angle-left" />
                                        </a>
                                        <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                                            <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                </div>{/*/recommended_items*/}
                            </div>
                        </div>
                    </div>
                </section>


                <footer id="footer">{/*Footer*/}
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-2">
                                    <div className="companyinfo">
                                        <h2><span>e</span>-shopper</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="col-sm-3">
                                        <div className="video-gallery text-center">
                                            <a href="#">
                                                <div className="iframe-img">
                                                    <img src="images/home/iframe1.png" alt />
                                                </div>
                                                <div className="overlay-icon">
                                                    <i className="fa fa-play-circle-o" />
                                                </div>
                                            </a>
                                            <p>Circle of Hands</p>
                                            <h2>24 DEC 2014</h2>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="video-gallery text-center">
                                            <a href="#">
                                                <div className="iframe-img">
                                                    <img src="images/home/iframe2.png" alt />
                                                </div>
                                                <div className="overlay-icon">
                                                    <i className="fa fa-play-circle-o" />
                                                </div>
                                            </a>
                                            <p>Circle of Hands</p>
                                            <h2>24 DEC 2014</h2>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="video-gallery text-center">
                                            <a href="#">
                                                <div className="iframe-img">
                                                    <img src="images/home/iframe3.png" alt />
                                                </div>
                                                <div className="overlay-icon">
                                                    <i className="fa fa-play-circle-o" />
                                                </div>
                                            </a>
                                            <p>Circle of Hands</p>
                                            <h2>24 DEC 2014</h2>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="video-gallery text-center">
                                            <a href="#">
                                                <div className="iframe-img">
                                                    <img src="images/home/iframe4.png" alt />
                                                </div>
                                                <div className="overlay-icon">
                                                    <i className="fa fa-play-circle-o" />
                                                </div>
                                            </a>
                                            <p>Circle of Hands</p>
                                            <h2>24 DEC 2014</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="address">
                                        <img src="images/home/map.png" alt />
                                        <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-widget">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-2">
                                    <div className="single-widget">
                                        <h2>Service</h2>
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><a href="#">Online Help</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Order Status</a></li>
                                            <li><a href="#">Change Location</a></li>
                                            <li><a href="#">FAQ’s</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="single-widget">
                                        <h2>Quock Shop</h2>
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><a href="#">T-Shirt</a></li>
                                            <li><a href="#">Mens</a></li>
                                            <li><a href="#">Womens</a></li>
                                            <li><a href="#">Gift Cards</a></li>
                                            <li><a href="#">Shoes</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="single-widget">
                                        <h2>Policies</h2>
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><a href="#">Terms of Use</a></li>
                                            <li><a href="#">Privecy Policy</a></li>
                                            <li><a href="#">Refund Policy</a></li>
                                            <li><a href="#">Billing System</a></li>
                                            <li><a href="#">Ticket System</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="single-widget">
                                        <h2>About Shopper</h2>
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><a href="#">Company Information</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Store Location</a></li>
                                            <li><a href="#">Affillate Program</a></li>
                                            <li><a href="#">Copyright</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-sm-offset-1">
                                    <div className="single-widget">
                                        <h2>About Shopper</h2>
                                        <form action="#" className="searchform">
                                            <input type="text" placeholder="Your email address" />
                                            <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
                                            <p>Get the most recent updates from <br />our site and be updated your self...</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <p className="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
                                <p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
                            </div>
                        </div>
                    </div>
                </footer>{/*/Footer*/}
           
           
            </>
        );
    }
}

export default Home;