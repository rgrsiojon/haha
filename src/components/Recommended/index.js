import React, { Component } from 'react'

class Recommended extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let product_top = this.props.data
        return product_top !== null ? product_top.map(i => {
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

export default Recommended;