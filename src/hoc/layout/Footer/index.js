import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">{/*Footer*/}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="companyinfo">
                                    <h2><span>E</span>-Mac</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                                </div>
                            </div>
                            
                            <div className="col-sm-3 float-right" style={{float: "right"}}>
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
                                        <li><a href>Macbook </a></li>
                                        <li><a href>Mac mini</a></li>
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
                                    <h2>About Mac</h2>
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
                        <div className="row text-center">
                            <p className="pull-center">Copyright © 2019 E-Mac. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;