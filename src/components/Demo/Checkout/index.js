import React, { Component } from 'react';

class Checkout extends Component {
    render() {
        return (
            <div>
                <header id="header">{/*header*/}
                    <div className="header_top">{/*header_top*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
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
                                            <li><a href="checkout.html" className="active"><i className="fa fa-crosshairs" /> Checkout</a></li>
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
                                            <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down" /></a>
                                                <ul role="menu" className="sub-menu">
                                                    <li><a href="shop.html">Products</a></li>
                                                    <li><a href="product-details.html">Product Details</a></li>
                                                    <li><a href="checkout.html" className="active">Checkout</a></li>
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
                    </div>{/*/header-bottom*/}
                </header>{/*/header*/}
                <section id="cart_items">
                    <div className="container">
                        <div className="breadcrumbs">
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li className="active">Check out</li>
                            </ol>
                        </div>{/*/breadcrums*/}
                        <div className="step-one">
                            <h2 className="heading">Step1</h2>
                        </div>
                        <div className="checkout-options">
                            <h3>New User</h3>
                            <p>Checkout options</p>
                            <ul className="nav">
                                <li>
                                    <label><input type="checkbox" /> Register Account</label>
                                </li>
                                <li>
                                    <label><input type="checkbox" /> Guest Checkout</label>
                                </li>
                                <li>
                                    <a href><i className="fa fa-times" />Cancel</a>
                                </li>
                            </ul>
                        </div>{/*/checkout-options*/}
                        <div className="register-req">
                            <p>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</p>
                        </div>{/*/register-req*/}
                        <div className="shopper-informations">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="shopper-info">
                                        <p>Shopper Information</p>
                                        <form>
                                            <input type="text" placeholder="Display Name" />
                                            <input type="text" placeholder="User Name" />
                                            <input type="password" placeholder="Password" />
                                            <input type="password" placeholder="Confirm password" />
                                        </form>
                                        <a className="btn btn-primary" href>Get Quotes</a>
                                        <a className="btn btn-primary" href>Continue</a>
                                    </div>
                                </div>
                                <div className="col-sm-5 clearfix">
                                    <div className="bill-to">
                                        <p>Bill To</p>
                                        <div className="form-one">
                                            <form>
                                                <input type="text" placeholder="Company Name" />
                                                <input type="text" placeholder="Email*" />
                                                <input type="text" placeholder="Title" />
                                                <input type="text" placeholder="First Name *" />
                                                <input type="text" placeholder="Middle Name" />
                                                <input type="text" placeholder="Last Name *" />
                                                <input type="text" placeholder="Address 1 *" />
                                                <input type="text" placeholder="Address 2" />
                                            </form>
                                        </div>
                                        <div className="form-two">
                                            <form>
                                                <input type="text" placeholder="Zip / Postal Code *" />
                                                <select>
                                                    <option>-- Country --</option>
                                                    <option>United States</option>
                                                    <option>Bangladesh</option>
                                                    <option>UK</option>
                                                    <option>India</option>
                                                    <option>Pakistan</option>
                                                    <option>Ucrane</option>
                                                    <option>Canada</option>
                                                    <option>Dubai</option>
                                                </select>
                                                <select>
                                                    <option>-- State / Province / Region --</option>
                                                    <option>United States</option>
                                                    <option>Bangladesh</option>
                                                    <option>UK</option>
                                                    <option>India</option>
                                                    <option>Pakistan</option>
                                                    <option>Ucrane</option>
                                                    <option>Canada</option>
                                                    <option>Dubai</option>
                                                </select>
                                                <input type="password" placeholder="Confirm password" />
                                                <input type="text" placeholder="Phone *" />
                                                <input type="text" placeholder="Mobile Phone" />
                                                <input type="text" placeholder="Fax" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="order-message">
                                        <p>Shipping Order</p>
                                        <textarea name="message" placeholder="Notes about your order, Special Notes for Delivery" rows={16} defaultValue={""} />
                                        <label><input type="checkbox" /> Shipping to bill address</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-payment">
                            <h2>Review &amp; Payment</h2>
                        </div>
                        <div className="table-responsive cart_info">
                            <table className="table table-condensed">
                                <thead>
                                    <tr className="cart_menu">
                                        <td className="image">Item</td>
                                        <td className="description" />
                                        <td className="price">Price</td>
                                        <td className="quantity">Quantity</td>
                                        <td className="total">Total</td>
                                        <td />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="cart_product">
                                            <a href><img src="images/cart/one.png" alt /></a>
                                        </td>
                                        <td className="cart_description">
                                            <h4><a href>Colorblock Scuba</a></h4>
                                            <p>Web ID: 1089772</p>
                                        </td>
                                        <td className="cart_price">
                                            <p>$59</p>
                                        </td>
                                        <td className="cart_quantity">
                                            <div className="cart_quantity_button">
                                                <a className="cart_quantity_up" href> + </a>
                                                <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                                <a className="cart_quantity_down" href> - </a>
                                            </div>
                                        </td>
                                        <td className="cart_total">
                                            <p className="cart_total_price">$59</p>
                                        </td>
                                        <td className="cart_delete">
                                            <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_product">
                                            <a href><img src="images/cart/two.png" alt /></a>
                                        </td>
                                        <td className="cart_description">
                                            <h4><a href>Colorblock Scuba</a></h4>
                                            <p>Web ID: 1089772</p>
                                        </td>
                                        <td className="cart_price">
                                            <p>$59</p>
                                        </td>
                                        <td className="cart_quantity">
                                            <div className="cart_quantity_button">
                                                <a className="cart_quantity_up" href> + </a>
                                                <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                                <a className="cart_quantity_down" href> - </a>
                                            </div>
                                        </td>
                                        <td className="cart_total">
                                            <p className="cart_total_price">$59</p>
                                        </td>
                                        <td className="cart_delete">
                                            <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart_product">
                                            <a href><img src="images/cart/three.png" alt /></a>
                                        </td>
                                        <td className="cart_description">
                                            <h4><a href>Colorblock Scuba</a></h4>
                                            <p>Web ID: 1089772</p>
                                        </td>
                                        <td className="cart_price">
                                            <p>$59</p>
                                        </td>
                                        <td className="cart_quantity">
                                            <div className="cart_quantity_button">
                                                <a className="cart_quantity_up" href> + </a>
                                                <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                                <a className="cart_quantity_down" href> - </a>
                                            </div>
                                        </td>
                                        <td className="cart_total">
                                            <p className="cart_total_price">$59</p>
                                        </td>
                                        <td className="cart_delete">
                                            <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}>&nbsp;</td>
                                        <td colSpan={2}>
                                            <table className="table table-condensed total-result">
                                                <tbody><tr>
                                                    <td>Cart Sub Total</td>
                                                    <td>$59</td>
                                                </tr>
                                                    <tr>
                                                        <td>Exo Tax</td>
                                                        <td>$2</td>
                                                    </tr>
                                                    <tr className="shipping-cost">
                                                        <td>Shipping Cost</td>
                                                        <td>Free</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td><span>$61</span></td>
                                                    </tr>
                                                </tbody></table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="payment-options">
                            <span>
                                <label><input type="checkbox" /> Direct Bank Transfer</label>
                            </span>
                            <span>
                                <label><input type="checkbox" /> Check Payment</label>
                            </span>
                            <span>
                                <label><input type="checkbox" /> Paypal</label>
                            </span>
                        </div>
                    </div>
                </section> {/*/#cart_items*/}
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
                                <p className="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
                                <p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
                            </div>
                        </div>
                    </div>
                </footer>{/*/Footer*/}
            </div>
        );
    }
}

export default Checkout;