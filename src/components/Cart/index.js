import React, { Component } from 'react';
import Loading from './../Loading'
import Alert from './../Alert'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }
        this.handler_total = this.handler_total.bind(this)
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

    handler_delete_cart(id) {
        let { get_all_carts, get_all_products, _delete_cart_by_id } = this.props
        _delete_cart_by_id(id)
        get_all_carts()
        get_all_products()
    }

    render() {
        let carts = this.props.carts
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
                        <img width="300px" height="300px" src={item[0].avatar} alt />
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
                        <a className="cart_quantity_up" href> + </a>
                        <input className="cart_quantity_input" style={{ width: 53 }} type="text" name="quantity" defaultValue={carts.data[index].amount} />
                        <a className="cart_quantity_down" href> - </a>
                    </div>
                </td>
                <td className="cart_total">
                    <p className="cart_total_price"> {item[0].price * carts.data[index].amount} VND</p>
                </td>
                <td className="cart_delete">
                    <a onClick={() => {
                        this.handler_delete_cart(carts.data[index].id)
                    }} className="cart_quantity_delete" href><i className="fa fa-times" /></a>
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

        let { _create_end } = this.props
        let cart = this.props.carts
        let alert_cart = cart.is_loading === true
            ? <Alert class="my--alert--deger">Deleted product</Alert>
            : <div></div>
        if (cart.is_deleted === true) {
            _create_end()
        }

        return (
            <>
                {alert_cart}
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
                                        <td className="image">Sản phẩm</td>
                                        <td className="" />
                                        <td className="price">Giá</td>
                                        <td className="quantity">Số lượng</td>
                                        <td className="total">Tổng giá</td>
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
                            <h3>Tổng giỏ hàng</h3>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="total_area">
                                    <ul>
                                        <li>Subtotal <span>{this.state.total} VND</span></li>
                                        <li>Tổng <span>{this.state.total} VND</span></li>
                                    </ul>
                                    <a className="btn btn-default update" href>Tiến hành thanh toán</a>
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