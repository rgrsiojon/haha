import React, { Component } from 'react';
import Loading from './../Loading';
import Alert from './../Alert'

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            shipping_address: "",
            phone: 0
        }
        this.handler_total = this.handler_total.bind(this)
        this.handler_change_shipping_address = this.handler_change_shipping_address.bind(this)
        this.handler_create_order = this.handler_create_order.bind(this)
        this.handler_change_phone = this.handler_change_phone.bind(this)
    }
    
    componentDidMount() {
        let { get_all_carts, get_all_products } = this.props
        get_all_carts()
        get_all_products()
    }

    handler_total(total) {
        this.setState({
            total: total
        })
    }

    handler_change_shipping_address(e) {
        this.setState({
            shipping_address: e.target.value
        })
    }

    handler_change_phone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    handler_create_order() {
        let carts = this.props.carts
        
        const data = {
            total_pay: this.state.total,
            shipping_address: this.state.shipping_address,
            phone: this.state.phone,
            array_id: carts.data,
            user_id: this.props.auth.data.id
        }

        let { _create_order } = this.props
        _create_order(data)

    }


    render() {
        let carts = this.props.carts
        let order = this.props.order
        let product = this.props.product
        let data_result = (product.data !== null && carts.data !== null) 
        ? carts.data.map((item_cart) => {
            return product.data !== null 
                ? product.data.filter(item_product => {
                return item_cart.product_id === item_product.id
            }) : null
        })
        : null

        let list_cart = data_result !== null 
        ? data_result.map((item, index) => {
            return <tr>
                <td style={{ width: 300}}>
                    <a>
                        <img width="110px" src={item[0].avatar} alt />
                    </a>
                    
                </td>
                <td style={{width: 408}}>
                    <span>{item[0].title}</span>
                </td>
                <td className="cart_price">
                    <p>{item[0].price}</p>
                </td>
                <td className="cart_quantity">
                    <div className="cart_quantity_button">
                        <p className="text-center" >{carts.data[index].amount}</p>
                    </div>
                </td>
                <td className="cart_total">
                    <p className="cart_total_price"> {item[0].price * (carts.data[index].amount)} VND</p>
                </td>
            </tr>
        }) : <Loading></Loading>

        let total = data_result !== null 
        ? data_result.reduce(function(total, currentValue, currentIndex, arr) {
            return currentValue[0].price * carts.data[currentIndex].amount + total
        }, 0)
        : 0

        if(total !== this.state.total) {
            this.handler_total(total)
        }

        let alert = (order.is_loading === false)
        ? <Alert class="my--alert--secon">Thành công</Alert> 
        : <div></div>
        
        return (
            <>    
                {
                    order.is_loading == true 
                    ? <Loading></Loading>
                    : <> 
                    {alert}
                    <section id="cart_items">
                        <div className="container">
                            <div className="breadcrumbs">
                                <ol className="breadcrumb">
                                    <li><a href="#">Home</a></li>
                                    <li className="active">Check out</li>
                                </ol>
                            </div>{/*/breadcrums*/}
                            
                            <div className="register-req">
                                <p>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</p>
                            </div>{/*/register-req*/}
                            <div className="shopper-informations">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="shopper-info">
                                            <p>Shopper Information</p>
                                            <form>
                                                <input onChange={this.handler_change_shipping_address} type="Địa chỉ" placeholder="Address" />
                                                <input onChange={this.handler_change_phone} type="number" placeholder="Phone" />
                                                <input type="text" placeholder="User Name or Email" />
                                                <input type="password" placeholder="Password" />
                                            </form>
                                            <a onClick={this.handler_create_order} className="btn btn-primary" href>Xác nhận thanh toán</a>
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
                                            <td className="image">Sản phẩm</td>
                                            <td className="description" />
                                            <td className="price">Giá</td>
                                            <td className="quantity">Số lượng</td>
                                            <td className="total">Tổng</td>
                                            <td />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list_cart}
                                        <tr>
                                            <td colSpan={3}>&nbsp;</td>
                                            <td colSpan={3}>
                                                <table className="table table-condensed total-result">
                                                    <tbody><tr>
                                                        <td>Tổng giá sản phẩm</td>
                                                        <td>{this.state.total} VND</td>
                                                    </tr>
                                                        <tr className="shipping-cost">
                                                            <td>Phí vận chuyển</td>
                                                            <td>Free</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tổng tiền thanh toán</td>
                                                            <td><span>{this.state.total} VND</span></td>
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
                    </section>
                    </>
                }
                </>

        );
    }
}

export default Checkout;