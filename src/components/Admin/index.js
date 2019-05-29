import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (
            

                <div className="main-content">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="overview-wrap">
                                        <h2 className="title-1">overview</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row m-t-25">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="overview-item overview-item--c1">
                                        <div className="overview__inner">
                                            <div className="overview-box clearfix">
                                                <div className="icon">
                                                    <i className="zmdi zmdi-account-o" />
                                                </div>
                                                <div className="text">
                                                    <h2>10368</h2>
                                                    <span>members online</span>
                                                </div>
                                            </div>
                                            <div className="overview-chart">
                                                <canvas id="widgetChart1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="overview-item overview-item--c2">
                                        <div className="overview__inner">
                                            <div className="overview-box clearfix">
                                                <div className="icon">
                                                    <i className="zmdi zmdi-shopping-cart" />
                                                </div>
                                                <div className="text">
                                                    <h2>388,688</h2>
                                                    <span>items solid</span>
                                                </div>
                                            </div>
                                            <div className="overview-chart">
                                                <canvas id="widgetChart2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="overview-item overview-item--c3">
                                        <div className="overview__inner">
                                            <div className="overview-box clearfix">
                                                <div className="icon">
                                                    <i className="zmdi zmdi-calendar-note" />
                                                </div>
                                                <div className="text">
                                                    <h2>1,086</h2>
                                                    <span>this week</span>
                                                </div>
                                            </div>
                                            <div className="overview-chart">
                                                <canvas id="widgetChart3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="overview-item overview-item--c4">
                                        <div className="overview__inner">
                                            <div className="overview-box clearfix">
                                                <div className="icon">
                                                    <i className="zmdi zmdi-money" />
                                                </div>
                                                <div className="text">
                                                    <h2>$1,060,386</h2>
                                                    <span>total earnings</span>
                                                </div>
                                            </div>
                                            <div className="overview-chart">
                                                <canvas id="widgetChart4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-9">
                                    <h2 className="title-1 m-b-25">Earnings By Items</h2>
                                    <div className="table-responsive table--no-card m-b-40">
                                        <table className="table table-borderless table-striped table-earning">
                                            <thead>
                                                <tr>
                                                    <th>date</th>
                                                    <th>order ID</th>
                                                    <th>name</th>
                                                    <th className="text-right">price</th>
                                                    <th className="text-right">quantity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>2018-09-29 05:57</td>
                                                    <td>100398</td>
                                                    <td>iPhone X 64Gb Grey</td>
                                                    <td className="text-right">$999.00</td>
                                                    <td className="text-right">1</td>
                                                </tr>
                                                <tr>
                                                    <td>2018-09-28 01:22</td>
                                                    <td>100397</td>
                                                    <td>Samsung S8 Black</td>
                                                    <td className="text-right">$756.00</td>
                                                    <td className="text-right">1</td>
                                                </tr>
                                                <tr>
                                                    <td>2018-09-27 02:12</td>
                                                    <td>100396</td>
                                                    <td>Game Console Controller</td>
                                                    <td className="text-right">$22.00</td>
                                                    <td className="text-right">2</td>
                                                </tr>
                                                <tr>
                                                    <td>2018-09-26 23:06</td>
                                                    <td>100395</td>
                                                    <td>iPhone X 256Gb Black</td>
                                                    <td className="text-right">$1199.00</td>
                                                    <td className="text-right">1</td>
                                                </tr>
                                                <tr>
                                                    <td>2018-09-25 19:03</td>
                                                    <td>100393</td>
                                                    <td>USB 3.0 Cable</td>
                                                    <td className="text-right">$10.00</td>
                                                    <td className="text-right">3</td>
                                                </tr>
                                                <tr>
                                                    <td>2018-09-29 05:57</td>
                                                    <td>100392</td>
                                                    <td>Smartwatch 4.0 LTE Wifi</td>
                                                    <td className="text-right">$199.00</td>
                                                    <td className="text-right">6</td>
                                                </tr>
                                                <tr>
                                                    <td>2018-09-24 19:10</td>
                                                    <td>100391</td>
                                                    <td>Camera C430W 4k</td>
                                                    <td className="text-right">$699.00</td>
                                                    <td className="text-right">1</td>
                                                </tr>
                                                <tr>
                                                    <td>2018-09-22 00:43</td>
                                                    <td>100393</td>
                                                    <td>USB 3.0 Cable</td>
                                                    <td className="text-right">$10.00</td>
                                                    <td className="text-right">3</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="copyright">
                                        <p>Copyright © 2018 rgrsiojon. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            // </div>

        );
    }
}

export default Admin;