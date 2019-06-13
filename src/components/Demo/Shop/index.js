import React, { Component } from 'react';

class Shop extends Component {
    render() {
        return (
            <div>
                <header id="header">{/*header*/}
                    <div className="header_top">{/*header_top*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <div className="contactinfo">
                                        <ul className="nav nav-pills">
                                            <li><a href><i className="fa fa-phone" /> +2 95 01 88 821</a></li>
                                            <li><a href><i className="fa fa-envelope" /> info@domain.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="social-icons pull-right">
                                        <ul className="nav navbar-nav">
                                            <li><a href><i className="fa fa-facebook" /></a></li>
                                            <li><a href><i className="fa fa-twitter" /></a></li>
                                            <li><a href><i className="fa fa-linkedin" /></a></li>
                                            <li><a href><i className="fa fa-dribbble" /></a></li>
                                            <li><a href><i className="fa fa-google-plus" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/*/header_top*/}
                    <div className="header-middle">{/*header-middle*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="logo pull-left">
                                        <a href="index.html"><img src="images/home/logo.png" alt /></a>
                                    </div>
                                    <div className="btn-group pull-right">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                                USA
                        <span className="caret" />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a href>Canada</a></li>
                                                <li><a href>UK</a></li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                                DOLLAR
                        <span className="caret" />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a href>Canadian Dollar</a></li>
                                                <li><a href>Pound</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="shop-menu pull-right">
                                        <ul className="nav navbar-nav">
                                            <li><a href><i className="fa fa-user" /> Account</a></li>
                                            <li><a href><i className="fa fa-star" /> Wishlist</a></li>
                                            <li><a href="checkout.html"><i className="fa fa-crosshairs" /> Checkout</a></li>
                                            <li><a href="cart.html"><i className="fa fa-shopping-cart" /> Cart</a></li>
                                            <li><a href="login.html"><i className="fa fa-lock" /> Login</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/*/header-middle*/}
                    <div className="header-bottom">{/*header-bottom*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-9">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className="mainmenu pull-left">
                                        <ul className="nav navbar-nav collapse navbar-collapse">
                                            <li><a href="index.html">Home</a></li>
                                            <li className="dropdown"><a href="#" className="active">Shop<i className="fa fa-angle-down" /></a>
                                                <ul role="menu" className="sub-menu">
                                                    <li><a href="shop.html" className="active">Products</a></li>
                                                    <li><a href="product-details.html">Product Details</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="login.html">Login</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down" /></a>
                                                <ul role="menu" className="sub-menu">
                                                    <li><a href="blog.html">Blog List</a></li>
                                                    <li><a href="blog-single.html">Blog Single</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="404.html">404</a></li>
                                            <li><a href="contact-us.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="search_box pull-right">
                                        <input type="text" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section id="advertisement">
                    <div className="container">
                        <img src="images/shop/advertisement.jpg" alt />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="left-sidebar">
                                    <h2>Category</h2>
                                    <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                                        <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                                        Sportswear
                          </a>
                                                </h4>
                                            </div>
                                            <div id="sportswear" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <ul>
                                                        <li><a href>Nike </a></li>
                                                        <li><a href>Under Armour </a></li>
                                                        <li><a href>Adidas </a></li>
                                                        <li><a href>Puma</a></li>
                                                        <li><a href>ASICS </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                                        <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                                        Mens
                          </a>
                                                </h4>
                                            </div>
                                            <div id="mens" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <ul>
                                                        <li><a href>Fendi</a></li>
                                                        <li><a href>Guess</a></li>
                                                        <li><a href>Valentino</a></li>
                                                        <li><a href>Dior</a></li>
                                                        <li><a href>Versace</a></li>
                                                        <li><a href>Armani</a></li>
                                                        <li><a href>Prada</a></li>
                                                        <li><a href>Dolce and Gabbana</a></li>
                                                        <li><a href>Chanel</a></li>
                                                        <li><a href>Gucci</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                                        <span className="badge pull-right"><i className="fa fa-plus" /></span>
                                                        Womens
                          </a>
                                                </h4>
                                            </div>
                                            <div id="womens" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <ul>
                                                        <li><a href>Fendi</a></li>
                                                        <li><a href>Guess</a></li>
                                                        <li><a href>Valentino</a></li>
                                                        <li><a href>Dior</a></li>
                                                        <li><a href>Versace</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><a href="#">Kids</a></h4>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><a href="#">Fashion</a></h4>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><a href="#">Households</a></h4>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><a href="#">Interiors</a></h4>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><a href="#">Clothing</a></h4>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><a href="#">Bags</a></h4>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title"><a href="#">Shoes</a></h4>
                                            </div>
                                        </div>
                                    </div>{/*/category-productsr*/}
                                    <div className="brands_products">{/*brands_products*/}
                                        <h2>Brands</h2>
                                        <div className="brands-name">
                                            <ul className="nav nav-pills nav-stacked">
                                                <li><a href> <span className="pull-right">(50)</span>Acne</a></li>
                                                <li><a href> <span className="pull-right">(56)</span>Grüne Erde</a></li>
                                                <li><a href> <span className="pull-right">(27)</span>Albiro</a></li>
                                                <li><a href> <span className="pull-right">(32)</span>Ronhill</a></li>
                                                <li><a href> <span className="pull-right">(5)</span>Oddmolly</a></li>
                                                <li><a href> <span className="pull-right">(9)</span>Boudestijn</a></li>
                                                <li><a href> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
                                            </ul>
                                        </div>
                                    </div>{/*/brands_products*/}
                                    <div className="price-range">{/*price-range*/}
                                        <h2>Price Range</h2>
                                        <div className="well">
                                            <input type="text" className="span2" defaultValue data-slider-min={0} data-slider-max={600} data-slider-step={5} data-slider-value="[250,450]" id="sl2" /><br />
                                            <b>$ 0</b> <b className="pull-right">$ 600</b>
                                        </div>
                                    </div>{/*/price-range*/}
                                    <div className="shipping text-center">{/*shipping*/}
                                        <img src="images/home/shipping.jpg" alt />
                                    </div>{/*/shipping*/}
                                </div>
                            </div>
                            <div className="col-sm-9 padding-right">
                                <div className="features_items">{/*features_items*/}
                                    <h2 className="title text-center">Features Items</h2>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/shop/product12.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/shop/product11.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/shop/product10.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/shop/product9.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                                <img src="images/home/new.png" className="new" alt />
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/shop/product8.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                                <img src="images/home/sale.png" className="new" alt />
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/shop/product7.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/product6.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/product5.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/product4.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/product3.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/product2.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src="images/home/product1.jpg" alt />
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                        <h2>$56</h2>
                                                        <p>Easy Polo Black Edition</p>
                                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="pagination">
                                        <li className="active"><a href>1</a></li>
                                        <li><a href>2</a></li>
                                        <li><a href>3</a></li>
                                        <li><a href>»</a></li>
                                    </ul>
                                </div>{/*features_items*/}
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
                                            <li><a href>Online Help</a></li>
                                            <li><a href>Contact Us</a></li>
                                            <li><a href>Order Status</a></li>
                                            <li><a href>Change Location</a></li>
                                            <li><a href>FAQ’s</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="single-widget">
                                        <h2>Quock Shop</h2>
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><a href>T-Shirt</a></li>
                                            <li><a href>Mens</a></li>
                                            <li><a href>Womens</a></li>
                                            <li><a href>Gift Cards</a></li>
                                            <li><a href>Shoes</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="single-widget">
                                        <h2>Policies</h2>
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><a href>Terms of Use</a></li>
                                            <li><a href>Privecy Policy</a></li>
                                            <li><a href>Refund Policy</a></li>
                                            <li><a href>Billing System</a></li>
                                            <li><a href>Ticket System</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="single-widget">
                                        <h2>About Shopper</h2>
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><a href>Company Information</a></li>
                                            <li><a href>Careers</a></li>
                                            <li><a href>Store Location</a></li>
                                            <li><a href>Affillate Program</a></li>
                                            <li><a href>Copyright</a></li>
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
                                <p className="pull-left">Copyright © 2013 E-Shopper. All rights reserved.</p>
                                <p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
                            </div>
                        </div>
                    </div>
                </footer>{/*/Footer*/}
            </div>
        )
    }
}

export default Shop;