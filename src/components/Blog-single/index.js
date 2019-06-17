import React, { Component } from 'react'
import Loading from './../Loading'
import Recommended from './../Recommended'

class Blog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let product = this.props.data
        return (
            <>
                <div className="product-details">{/*product-details*/}
                    <div className="col-sm-5">
                        <div className="view-product">
                            <img src={product.avatar} alt="Product" />
                            <h3>ZOOM</h3>
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
                total_page: 0
            }
            this.handler_next = this.handler_next.bind(this)
            this.handler_prev = this.handler_prev.bind(this)
            this.handler_total = this.handler_total.bind(this)
        }
    
    componentDidMount() {
                    let { _get_product_by_id, _get_top_product, _get_comment_of_product } = this.props
                _get_product_by_id(this.props.id)
                _get_top_product()
                _get_comment_of_product(this.props.id)
            }
        
    handler_prev() {
        if(this.state.page === 1) {
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
        if(this.state.page > this.state.total_page) {
            return false
        } else {
                    this.setState(state => {
                        return {
                            page: state.page + 1
                        }
                    })
                }
                }
            
    handler_total(pages){
                    this.setState({
                        total_page: pages
                    })
                }

                render() {
                    let { is_loading, product, data, product_top, comment } = this.props.product
                let pagesComment = comment !== null ? parseInt(parseInt(comment.length) / 3) : 0
            if(this.state.total_page !== pagesComment) {
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
                }): <div></div>
                console.log(this.props.product)
                return (
            <div>
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
                                            <Blog data={product}></Blog>
                                            : <Loading></Loading>
                                    }

                                    <div className="recommended_items">{/*recommended_items*/}
                                        <h2 className="title text-center">Sản phẩm liên quan</h2>
                                        <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="item active">
                                                    <Recommended data={product_top !== null ? product_top.slice(0, 3) : null} ></Recommended>
                                                </div>
                                                <div className="item">
                                                    <Recommended data={product_top !== null ? product_top.slice(3, 5) : null} ></Recommended>
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
                                                    <input type="text" placeholder="write your name..." />
                                                    <div className="blank-arrow">
                                                        <label>Email Address</label>
                                                    </div>
                                                    <input type="text" placeholder="write emai..." />
                                                </form>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="text-area">
                                                    <div className="blank-arrow">
                                                        <label>Bình luận </label>
                                                    </div>
                                                    <textarea style={{ backgroundColor: "#ffffff" }} name="message" rows={11} defaultValue={""} />
                                                    <a className="btn btn-primary" href>post comment</a>
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