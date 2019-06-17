import { connect } from "react-redux";
import Cart from '../../components/Cart'
import { get_all_cart } from './../../store/actions/cart'
import { get_all_product } from './../../store/actions/product'

const map_state_to_props = state => ({
    product: state.product,
    carts: state.carts
})

const map_dispatch_to_props = dispatch => ({
    get_all_products: function() {
        dispatch(get_all_product())
    },
    _create_carts: function(data) {
        dispatch(create_cart(data))
    },
    get_all_carts: function() {
        dispatch(get_all_cart())
    }
})

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(Cart);
