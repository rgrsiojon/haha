import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }


    render() {
        return (
            <div className="filter--name navbar-sidebar">
                <div className="col-md-12 m-t-25">
                    <h2 className="title text-center">Thương hiệu</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Apple
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Samsung
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 m-t-25">
                    <h2 class="title text-center">Loại</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Macbook Pro
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Macbook Ari
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Macbook
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Iphone
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 m-t-25">
                    <h2 class="title text-center">Năm sản xuất</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 2019
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 2018
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 2017
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 2016
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 2015
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 2014
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 2013/2012
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 m-t-25">
                    <h2 class="title text-center">Trạng thái</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Mới
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Cũ
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 m-t-25">
                    <h2 class="title text-center">Kích thước</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 12 inch
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 13.3 inch
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 15.6 inch
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 21.5 inch
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 27 inch
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 m-t-25">
                    <h2 class="title text-center">Touch bar</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Non-touchbar
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Touchbar
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 m-t-25">
                    <h2 class="title text-center">SSD</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 128GB
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 256GB
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 512GB
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 1TB
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 2TB
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 4TB
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 m-t-25">
                    <h2 class="title text-center">RAM</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 4GB
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 8GB 
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 16GB 
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 32GB 
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 64GB 
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 m-t-25">
                    <h2 class="title text-center">ROM</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 4GB
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 8GB 
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 16GB 
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 32GB 
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> 64GB 
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 m-t-25">
                    <h2 class="title text-center">CPU</h2>
                    <div className="line-seprate welcome2"></div>
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Core i5
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Core i7
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Core i9
                        </li>
                        <li className="active has-sub m-t-14">
                            <input className="m-r-10" type="checkbox"/> Core M
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Filter;