import React, { Component } from 'react';
import Loading from './../Loading'

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { get_all_carts, get_all_products } = this.props
        get_all_carts()
        get_all_products()
    }

    render() {
        let carts = this.props.carts
        let product = this.props.product
        let list_cart = (product.data !== null && carts.data !== null) 
            ? carts.data !== null 
            ? carts.data.map((item_cart) => {
                return product.data !== null 
                    ? product.data.filter(item_product => {
                    return item_cart.product_id === item_product.id
                }) : null
            }).map(item => {
                return <tr>
                    <td className="cart_product">
                        <a href><img src="images/cart/one.png" alt /></a>
                    </td>
                    <td className="cart_description">
                        <h4><a href>{item[0].title}</a></h4>

                    </td>
                    <td className="cart_price">
                        <p>{item[0].price}</p>
                    </td>
                    <td className="cart_quantity">
                        <div className="cart_quantity_button">
                            <a className="cart_quantity_up" href> + </a>
                            <input className="cart_quantity_input" style={{ width: 53 }} type="text" name="quantity" defaultValue={item[0].amount} />
                            <a className="cart_quantity_down" href> - </a>
                        </div>
                    </td>
                    <td className="cart_total">
                        <p className="cart_total_price">{item[0].price}</p>
                    </td>
                    <td className="cart_delete">
                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                    </td>
                </tr>
            }) : null
            : <Loading></Loading>

        return (
            <>
                <section id="cart_items">
                    <div className="container">
                        <div className="breadcrumbs">
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li className="active">Shopping Cart</li>
                            </ol>
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
                                    {list_cart}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section> {/*/#cart_items*/}
                <section id="do_action">
                    <div className="container">
                        <div className="heading">
                            <h3>What would you like to do next?</h3>
                            <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="chose_area">
                                    <ul className="user_option">
                                        <li>
                                            <input type="checkbox" />
                                            <label>Use Coupon Code</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label>Use Gift Voucher</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" />
                                            <label>Estimate Shipping &amp; Taxes</label>
                                        </li>
                                    </ul>
                                    <ul className="user_info">
                                        <li className="single_field">
                                            <label>Country:</label>
                                            <select>
                                                <option>United States</option>
                                                <option>Bangladesh</option>
                                                <option>UK</option>
                                                <option>India</option>
                                                <option>Pakistan</option>
                                                <option>Ucrane</option>
                                                <option>Canada</option>
                                                <option>Dubai</option>
                                            </select>
                                        </li>
                                        <li className="single_field">
                                            <label>Region / State:</label>
                                            <select>
                                                <option>Select</option>
                                                <option>Dhaka</option>
                                                <option>London</option>
                                                <option>Dillih</option>
                                                <option>Lahore</option>
                                                <option>Alaska</option>
                                                <option>Canada</option>
                                                <option>Dubai</option>
                                            </select>
                                        </li>
                                        <li className="single_field zip-field">
                                            <label>Zip Code:</label>
                                            <input type="text" />
                                        </li>
                                    </ul>
                                    <a className="btn btn-default update" href>Get Quotes</a>
                                    <a className="btn btn-default check_out" href>Continue</a>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="total_area">
                                    <ul>
                                        <li>Cart Sub Total <span>$59</span></li>
                                        <li>Eco Tax <span>$2</span></li>
                                        <li>Shipping Cost <span>Free</span></li>
                                        <li>Total <span>$61</span></li>
                                    </ul>
                                    <a className="btn btn-default update" href>Update</a>
                                    <a className="btn btn-default check_out" href>Check Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/*/#do_action*/}
            </>
        )
    }
}

export default Cart;