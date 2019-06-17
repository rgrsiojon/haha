import React, { Component } from 'react'
import Loading from './../Loading'
import Recommended from './../Recommended'
import Alert from './../Alert'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Blog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let product = this.props.data
        let data_hight_light = this.props.data_hight_light

        let product_hight_light = data_hight_light !== null ? data_hight_light.slice(0, 3).map(item => {
            return <Link onClick={()=>{
                this.props.handler_click_link(item.id)
            }} to={`/product/macbook/${item.id}`}>
                <img src={item.avatar} width="85px" alt="product hight light" />
            </Link>
        }) : <div></div>
        return (
            <>
                <div className="product-details">{/*product-details*/}
                    <div className="col-sm-5">
                        <div className="view-product">
                            <img src={product.avatar} alt="Product" />
                            <h3>ZOOM</h3>
                        </div>
                        <div id="similar-product" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    {product_hight_light}
                                </div>
                                <div className="item">
                                    {product_hight_light}
                                </div>
                                <div className="item">
                                    {product_hight_light}
                                </div>
                            </div>
                            {/* Controls */}
                            <a className="left item-control" href="#similar-product" data-slide="prev">
                                <i className="fa fa-angle-left" />
                            </a>
                            <a className="right item-control" href="#similar-product" data-slide="next">
                                <i className="fa fa-angle-right" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="product-information">
                            <h2>{product.type}</h2>
                            <p>{product.status}</p>
                            <img src="images/product-details/rating.png" alt />
                            <span>
                                <span>{product.price} VND</span>
                                <label>Quantity:</label>
                                <input type="text" defaultValue={1} />
                                <button type="button" className="btn btn-fefault cart">
                                    <i className="fa fa-shopping-cart" />
                                    Add to cart
                        </button>
                            </span>
                            <p><b>Display:</b> {product.display}</p>
                            <p><b>Color:</b> {product.color}</p>
                            <p><b>Title:</b> {product.title}</p>
                            <p><b>Cpu:</b> {product.cpu}</p>
                            <p><b>Gpu:</b> {product.gpu}</p>
                            <p><b>Condition:</b> {product.status}</p>
                            <p><b>Brand:</b> E-Mac</p>
                            <a href><img src="images/product-details/share.png" className="share img-responsive" alt /></a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

class BlogSingle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            total_page: 0,
            name: "",
            email: "",
            content: ""
        }
        this.handler_next = this.handler_next.bind(this)
        this.handler_prev = this.handler_prev.bind(this)
        this.handler_total = this.handler_total.bind(this)
        this.handler_change_name = this.handler_change_name.bind(this)
        this.handler_change_email = this.handler_change_email.bind(this)
        this.handler_change_content = this.handler_change_content.bind(this)
        this.reload = this.reload.bind(this)
        this.handler_comment = this.handler_comment.bind(this)

    }

    componentDidMount() {
        let { _get_product_by_id, _get_top_product, _get_comment_of_product } = this.props
        _get_product_by_id(this.props.id)
        _get_top_product()
        _get_comment_of_product(this.props.id)
    }

    handler_prev() {
        if (this.state.page === 1) {
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
        if (this.state.page > this.state.total_page) {
            return false
        } else {
            this.setState(state => {
                return {
                    page: state.page + 1
                }
            })
        }
    }

    handler_change_name(e) {
        this.setState({
            name: e.target.value
        })
    }

    handler_change_email(e) {
        this.setState({
            email: e.target.value
        })
    }

    handler_change_content(e) {
        this.setState({
            content: e.target.value
        })
    }

    handler_total(pages) {
        this.setState({
            total_page: pages
        })
    }

    reload(id) {
        let { _get_product_by_id, _get_comment_of_product } = this.props
        _get_product_by_id(id)
        this.props.id = id
        _get_comment_of_product(id)
    }

    handler_comment() {
        let { _create_comment_for_product, _get_comment_of_product } = this.props
        _create_comment_for_product(this.state)
        _get_comment_of_product(this.props.id)
    }

    render() {
        let { is_loading, product, data, product_top, comment, created_comment, data_comment } = this.props.product
        let { _create_comment_end } = this.props
        let pagesComment = comment !== null ? parseInt(parseInt(comment.length) / 3) : 0
        if (this.state.total_page !== pagesComment) {
            this.handler_total(pagesComment)
        }
        let list_comment = comment !== null ? comment.slice(this.state.page * 3 - 3, this.state.page * 3).map((i, index) => {
            return <div key={index} className="media commnets">
                <a className="pull-left" href="#">
                    <img width="80px" className="media-object" src="images/User_Circle.png" alt />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">{i.user_name}</h4>
                    <p>{i.content}</p>
                    <div className="blog-socials">
                        <ul>
                            <li><a href><i className="fa fa-facebook" /></a></li>
                            <li><a href><i className="fa fa-twitter" /></a></li>
                            <li><a href><i className="fa fa-dribbble" /></a></li>
                            <li><a href><i className="fa fa-google-plus" /></a></li>
                        </ul>
                        <a className="btn btn-primary" href>Other Posts</a>
                    </div>
                </div>

            </div>
        }) : <div></div>
        let alert = data_comment !== null
            ? <Alert className="my--alert--secon">Add product to cart is success</Alert>
            : <div></div>
        if (created_comment === true) {
            _create_comment_end()
        }

        return (
            <div>
                {alert}
                <section>
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-3">
                                <div className="left-sidebar">
                                    <div className="brands_products">{/*brands_products*/}
                                        <h2> Danh mục</h2>
                                        <div className="brands-name">
                                            <ul className="nav nav-pills nav-stacked">
                                                <li><a href> <span className="pull-right">(50)</span>Macbook pro</a></li>
                                                <li><a href> <span className="pull-right">(56)</span>Macbook Ari</a></li>
                                                <li><a href> <span className="pull-right">(27)</span>Macbook</a></li>
                                                <li><a href> <span className="pull-right">(32)</span>Mac Mini</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-9">
                                {
                                    product !== null
                                        ?
                                        <Blog data={product} data_hight_light={product_top} handler_click_link={this.reload}></Blog>
                                        : <Loading></Loading>
                                }

                                
                                <div className="rating-area">
                                    <ul className="ratings">
                                        <li className="rate-this">Rate this item:</li>
                                        <li>
                                            <i className="fa fa-star color" />
                                            <i className="fa fa-star color" />
                                            <i className="fa fa-star color" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </li>
                                        <li className="color">(6 votes)</li>
                                    </ul>
                                    <ul className="tag">
                                        <li>TAG:</li>
                                        <li><a className="color" href>Mac <span>/</span></a></li>
                                        <li><a className="color" href>Macbook Pro <span>/</span></a></li>
                                    </ul>
                                </div>{/*/rating-area*/}
                                <div className="socials-share">
                                    <a href><img src="images/blog/socials.png" alt /></a>
                                </div>{/*/socials-share*/}

                                {list_comment}
                                <div className="col-sm-12 text-center m-b-25">
                                    <div>
                                        <a onClick={this.handler_prev} className="left recommended-item-control my--recommended-item-control-left" href="#recommended-item-carousel" data-slide="prev">
                                            <i className="fa fa-angle-left" />
                                        </a>
                                        <a className="cart_quantity_up">{this.state.page}</a>
                                        <a onClick={this.handler_next} className="left recommended-item-control my--recommended-item-control-right" href> <i className="fa fa-angle-right"></i> </a>
                                    </div>
                                </div>

                                <div className="replay-box">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h2>Leave a replay</h2>
                                            <form>
                                                <div className="blank-arrow">
                                                    <label>Your Name</label>
                                                </div>
                                                <input onChange={this.handler_change_name} type="text" placeholder="write your name..." />
                                                <div className="blank-arrow">
                                                    <label>Email Address</label>
                                                </div>
                                                <input onChange={this.handler_change_email} type="text" placeholder="write emai..." />
                                            </form>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="text-area">
                                                <div className="blank-arrow">
                                                    <label>Bình luận </label>
                                                </div>
                                                <textarea onChange={this.handler_change_content} style={{ backgroundColor: "#ffffff" }} name="message" rows={11} defaultValue={""} />
                                                <button onClick={this.handler_comment} className="btn btn-primary" href> Bình luận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BlogSingle;