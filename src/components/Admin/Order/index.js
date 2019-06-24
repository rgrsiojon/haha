import React, { Component } from 'react';

class Order extends Component {
    componentDidMount() {
        let { _get_order_by_id } = this.props
        _get_order_by_id(this.props.id)
    }
    render() {
        console.log(this.props.order)
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <h1>Chi tiet don hang</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;