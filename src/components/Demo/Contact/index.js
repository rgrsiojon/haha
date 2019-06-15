import React, { Component } from 'react'

class Contact extends Component {
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
                                            <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down" /></a>
                                                <ul role="menu" className="sub-menu">
                                                    <li><a href="shop.html">Products</a></li>
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
                                            <li><a href="contact-us.html" className="active">Contact</a></li>
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
                <div id="contact-page" className="container">
                    <div className="bg">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="title text-center">Contact <strong>Us</strong></h2>
                                <div id="gmap" className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1975354175866!2d106.71898865032125!3d10.796177661743345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752918464f90ef%3A0x29fbaa75a09435b0!2sLandmark+6!5e0!3m2!1svi!2s!4v1560399837711!5m2!1svi!2s" frameBorder={0} style={{border: 0, width: "100%", height: "100%"}} allowFullScreen />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="contact-form">
                                    <h2 className="title text-center">Get In Touch</h2>
                                    <div className="status alert alert-success" style={{ display: 'none' }} />
                                    <form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="name" className="form-control" required="required" placeholder="Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" name="email" className="form-control" required="required" placeholder="Email" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="text" name="subject" className="form-control" required="required" placeholder="Subject" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea name="message" id="message" required="required" className="form-control" rows={8} placeholder="Your Message Here" defaultValue={""} />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="submit" name="submit" className="btn btn-primary pull-right" defaultValue="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="contact-info">
                                    <h2 className="title text-center">Contact Info</h2>
                                    <address>
                                        <p>E-Shopper Inc.</p>
                                        <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
                                        <p>Newyork USA</p>
                                        <p>Mobile: +2346 17 38 93</p>
                                        <p>Fax: 1-714-252-0026</p>
                                        <p>Email: info@e-shopper.com</p>
                                    </address>
                                    <div className="social-networks">
                                        <h2 className="title text-center">Social Networking</h2>
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fa fa-facebook" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-twitter" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-google-plus" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-youtube" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*/#contact-page*/}
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
        )
    }
}



export default Contact;