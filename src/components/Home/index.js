import React, { Component } from 'react';
import Carousel from './../Carousel'
import Products from './../Products'
import Loading from './../Loading'
import Alert from './../Alert'
import _ from 'lodash'

class Recommended extends Component {
    constructor(props) {
        super(props);
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
        }) : <div></div>
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_ram_8: false,
            is_ram_16: false,
            is_ram_32: false,
            is_type_2016: false,
            is_type_2017: false,
            is_type_2018: false,
            is_type_2015: false,
            is_type_2014: false,
            is_apple: false,
            is_dell: false,
            is_status_99: false,
            is_status_98: false,
            is_status_full_box: false,
            is_i9: false,
            is_i7: false,
            is_i5: false,
            is_im: false,
            is_disk_256: false,
            is_disk_512: false,
            is_disk_1024: false,
            is_disk_4098: false,
            is_15_inch: false,
            is_13_inch: false,
            is_search: true
        }

        this.handler_ram_choose_ram_8 = this.handler_ram_choose_ram_8.bind(this)
        this.handler_ram_choose_ram_16 = this.handler_ram_choose_ram_16.bind(this)
        this.handler_ram_choose_ram_32 = this.handler_ram_choose_ram_32.bind(this)
        this.handler_type_2016 = this.handler_type_2016.bind(this)
        this.handler_type_2017 = this.handler_type_2017.bind(this)
        this.handler_type_2018 = this.handler_type_2018.bind(this)
        this.handler_type_2015 = this.handler_type_2015.bind(this)
        this.handler_type_2014 = this.handler_type_2014.bind(this)
        this.handler_producer_apple = this.handler_producer_apple.bind(this)
        this.handler_producer_dell = this.handler_producer_dell.bind(this)
        this.handler_status_99 = this.handler_status_99.bind(this)
        this.handler_status_98 = this.handler_status_98.bind(this)
        this.handler_status_full_box = this.handler_status_full_box.bind(this)
        this.handler_status_i9 = this.handler_status_i9.bind(this)
        this.handler_status_i7 = this.handler_status_i7.bind(this)
        this.handler_status_im = this.handler_status_im.bind(this)
        this.handler_status_i5 = this.handler_status_i5.bind(this)
        this.handler_disk_256 = this.handler_disk_256.bind(this)
        this.handler_disk_512 = this.handler_disk_512.bind(this)
        this.handler_disk_1024 = this.handler_disk_1024.bind(this)
        this.handler_disk_4098 = this.handler_disk_4098.bind(this)
        this.handler_inch_13 = this.handler_inch_13.bind(this)
        this.handler_inch_15 = this.handler_inch_15.bind(this)
        this.hanler_product = this.hanler_product.bind(this)

    }

    componentDidMount() {
        let { get_all_products, _get_top_product } = this.props
        get_all_products()
        _get_top_product()
    }

    handler_ram_choose_ram_8() {
        this.setState(state => {
            return {
                is_ram_8: !state.is_ram_8
            }
        })
    }

    handler_ram_choose_ram_16() {
        this.setState(state => {
            return {
                is_ram_16: !state.is_ram_16
            }
        })
    }

    handler_ram_choose_ram_32() {
        this.setState(state => {
            return {
                is_ram_32: !state.is_ram_32
            }
        })
    }

    handler_type_2016() {
        this.setState(state => {
            return {
                is_type_2016: !state.is_type_2016
            }
        })
    }

    handler_type_2017() {
        this.setState(state => {
            return {
                is_type_2017: !state.is_type_2017
            }
        })
    }

    handler_type_2018() {
        this.setState(state => {
            return {
                is_type_2018: !state.is_type_2018
            }
        })
    }

    handler_type_2015() {
        this.setState(state => {
            return {
                is_type_2015: !state.is_type_2015
            }
        })
    }
    
    handler_type_2014() {
        this.setState(state => {
            return {
                is_type_2014: !state.is_type_2014
            }
        })
    }

    handler_producer_apple() {
        this.setState(state => {
            return {
                is_apple: !state.is_apple
            }
        })
    }

    handler_producer_dell() {
        this.setState(state => {
            return {
                is_dell: !state.is_dell
            }
        })
    }

    handler_status_99() {
        this.setState(state => {
            return {
                is_status_99: !state.is_status_99
            }
        })
    }

    handler_status_98() {
        this.setState(state => {
            return {
                is_status_98: !state.is_status_98
            }
        })
    }
    
    handler_status_full_box() {
        this.setState(state => {
            return {
                is_status_full_box: !state.is_status_full_box
            }
        })
    }

    handler_status_i9() {
        this.setState(state => {
            return {
                is_i9: !state.is_i9
            }
        })
    }

    handler_status_i7() {
        this.setState(state => {
            return {
                is_i7: !state.is_i7
            }
        })
    }

    handler_status_im() {
        this.setState(state => {
            return {
                is_im: !state.is_im
            }
        })
    }

    handler_status_i5() {
        this.setState(state => {
            return {
                is_i5: !state.is_i5
            }
        })
    }

    handler_disk_256() {
        this.setState(state => {
            return {
                is_disk_256: !state.is_disk_256
            }
        })
    }

    handler_disk_512() {
        this.setState(state => {
            return {
                is_disk_512: !state.is_disk_512
            }
        })
    }

    handler_disk_1024() {
        this.setState(state => {
            return {
                is_disk_1024: !state.is_disk_1024
            }
        })
    }

    handler_disk_4098() {
        this.setState(state => {
            return {
                is_disk_4098: !state.is_disk_4098
            }
        })
    }

    handler_inch_13() {
        this.setState(state => {
            return {
                is_13_inch: !state.is_13_inch
            }
        })
    }

    handler_inch_15() {
        this.setState(state => {
            return {
                is_15_inch: !state.is_15_inch
            }
        })
    }

    hanler_product(data) {
        let { _create_carts } = this.props
        _create_carts(data)
    }

    render() {
        console.log(this.props.search.content)
        let { is_loading, data, product_top, is_created } = this.props.product
        let { _create_cart_end } = this.props
        let cart = this.props.carts
        let alert = cart.is_loading === true
            ? <Alert class="my--alert--secon">Add product to cart is success</Alert>
            : <div></div>
        if (cart.is_created === true) {
            _create_cart_end()
        }

        const filter_ram = <div className="col-md-12 m-t-25">
                            <h2 class="title text-center">RAM</h2>
                            <div className="line-seprate welcome2"></div>
                            <ul className="list-unstyled navbar__list">
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_ram_choose_ram_8} className="m-r-10" type="checkbox" /> 8GB
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_ram_choose_ram_16} className="m-r-10" type="checkbox" /> 16GB
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_ram_choose_ram_32} className="m-r-10" type="checkbox" /> 32GB
                                </li>
                            </ul>
                        </div>
        data = data !== null && (
            this.state.is_ram_16 || 
            this.state.is_ram_8 || 
            this.state.is_ram_32 ||
            this.state.is_type_2016 ||
            this.state.is_type_2017 ||
            this.state.is_type_2018 ||
            this.state.is_type_2015 ||
            this.state.is_type_2014 ||
            this.state.is_apple || 
            this.state.is_dell ||
            this.state.is_status_99 ||
            this.state.is_status_98 ||
            this.state.is_status_full_box ||
            this.state.is_i9 ||
            this.state.is_im ||
            this.state.is_i5 ||
            this.state.is_disk_256 ||
            this.state.is_disk_512 ||
            this.state.is_disk_1024 ||
            this.state.is_disk_4098 ||
            this.state.is_13_inch ||
            this.state.is_15_inch ||
            
            this.state.is_i7
        ) ? data.filter(item => (
            item.ram === 16 && this.state.is_ram_16) || 
            (item.ram === 8 && this.state.is_ram_8) || 
            (item.ram === 32 && this.state.is_ram_32) ||
            (item.type === "MacBook Pro 2016" && this.state.is_type_2016) ||
            (item.type === "MacBook Pro 2017" && this.state.is_type_2017) ||
            (item.type === "MacBook Pro 2018" && this.state.is_type_2018) ||
            (item.type === "MacBook Pro 2015" && this.state.is_type_2015) ||
            (item.type === "MacBook Pro 2014" && this.state.is_type_2014) ||
            (item.producer === "Apple" && this.state.is_apple) ||
            (item.producer === "Dell" && this.state.is_dell) ||
            (item.status === "Used, máy đẹp 99%" && this.state.is_status_99) ||
            (item.status === "Used, máy đẹp 98%" && this.state.is_status_99) || 
            (item.cpu.indexOf("i9") !== -1 && this.state.is_i9) ||
            (item.cpu.indexOf("i7") !== -1 && this.state.is_i7) ||
            (item.cpu.indexOf("i5") !== -1 && this.state.is_i7) ||
            (item.cpu.indexOf("im") !== -1 && this.state.is_im) ||
            (item.disk === 256 && this.state.is_disk_256) ||
            (item.disk === 512 && this.state.is_disk_512) ||
            (item.disk === 1024 && this.state.is_disk_1024) ||
            (item.disk === 4098 && this.state.is_disk_4098) ||
            (item.display.indexOf(`15.4″`) !== -1 && this.state.is_15_inch) ||
            (item.display.indexOf(`13.3″`) !== -1 && this.state.is_13_inch) ||
            
            (item.status === "Used, máy đẹp likenew fullbox" && this.state.is_status_full_box)
        ) : data
        
        data = data !== null && (this.state.is_search) 
        ? data.filter(item => (
            (item.title.toLowerCase().indexOf(this.props.search.content.toLowerCase()) !== -1 ) && this.state.is_search
        )) : data


        const type =  <div className="col-md-12 m-t-25">
                            <h2 class="title text-center">Năm sản xuất</h2>
                            <div className="line-seprate welcome2"></div>
                            <ul className="list-unstyled navbar__list">
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_type_2018}  className="m-r-10" type="checkbox" /> 2018
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_type_2017} className="m-r-10" type="checkbox" /> 2017
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_type_2016} className="m-r-10" type="checkbox" /> 2016
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_type_2015} className="m-r-10" type="checkbox" /> 2015
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_type_2014} className="m-r-10" type="checkbox" /> 2014
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input className="m-r-10" type="checkbox" /> 2013/2012
                                </li>
                            </ul>
                        </div>
        const producer =  <div className="col-md-12 m-t-25">
                            <h2 className="title text-center">Thương hiệu</h2>
                            <div className="line-seprate welcome2"></div>
                            <ul className="list-unstyled navbar__list">
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_producer_apple}className="m-r-10" type="checkbox" /> Apple
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_producer_dell} className="m-r-10" type="checkbox" /> Dell
                                </li>
                            </ul>
                        </div>
        const status =  <div className="col-md-12 m-t-25">
                            <h2 class="title text-center">Trạng thái</h2>
                            <div className="line-seprate welcome2"></div>
                            <ul className="list-unstyled navbar__list">
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_status_99} className="m-r-10" type="checkbox" /> 99%
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_status_98} className="m-r-10" type="checkbox" /> 98%
                                </li>
                                <li className="active has-sub m-t-14">
                                    <input onClick={this.handler_status_full_box} className="m-r-10" type="checkbox" /> Full box
                                </li>
                            </ul>
                        </div>
        const cpu = <div className="col-md-12 m-t-25">
                        <h2 class="title text-center">CPU</h2>
                        <div className="line-seprate welcome2"></div>
                        <ul className="list-unstyled navbar__list">
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_status_i5} className="m-r-10" type="checkbox" /> Core i5
                            </li>
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_status_i7} className="m-r-10" type="checkbox" /> Core i7
                            </li>
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_status_i9} className="m-r-10" type="checkbox" /> Core i9
                            </li>
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_status_im} className="m-r-10" type="checkbox" /> Core M
                            </li>
                        </ul>
                    </div>
        const disk = <div className="col-md-12 m-t-25">
                        <h2 class="title text-center">DISK</h2>
                        <div className="line-seprate welcome2"></div>
                        <ul className="list-unstyled navbar__list">
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_disk_256} className="m-r-10" type="checkbox" /> 256GB
                            </li>
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_disk_512} className="m-r-10" type="checkbox" /> 512GB
                            </li>
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_disk_1024} className="m-r-10" type="checkbox" /> 1024GB
                            </li>
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_disk_4098} className="m-r-10" type="checkbox" /> 4098GB
                            </li>
                        </ul>
                    </div>
        const inch = <div className="col-md-12 m-t-25">
                        <h2 class="title text-center">Kích thước</h2>
                        <div className="line-seprate welcome2"></div>
                        <ul className="list-unstyled navbar__list">
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_inch_13} className="m-r-10" type="checkbox" /> 13.3 inch
                            </li>
                            <li className="active has-sub m-t-14">
                                <input onClick={this.handler_inch_15} className="m-r-10" type="checkbox" /> 15.6 inch
                            </li>
                        </ul>
                    </div>
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
                </section>
                <section>
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-3">
                                <div className="filter--name navbar-sidebar">
                                   {producer}
                                    {status}
                                    {type}
                                    {inch}
                                    {cpu}
                                    {disk}
                                    {filter_ram}
                                </div>
                            </div>


                            <div className="col-sm-9 padding-right">
                                <div className="features_items">
                                    <h2 className="title text-center">Features Items</h2>
                                    {
                                        is_loading === true ? <Loading></Loading> : <div></div>
                                    }
                                    {
                                        is_loading === false ? <Products onHandlerProduct={this.hanler_product} data={data}></Products> : <div></div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;