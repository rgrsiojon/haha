import { connect } from "react-redux";
import Checkout from './../../components/Checkout'
import { 
    get_all_cart,
    delete_cart,
    create_cart_end,
    update_mount_cart,
} from './../../store/actions/cart'
import { create_order } from './../../store/actions/order'
import { get_all_product } from './../../store/actions/product'

const map_state_to_props = state => ({
    product: state.product,
    carts: state.carts,
    order: state.order,
    auth: state.auth
})

const map_dispatch_to_props = dispatch => ({
    get_all_products: function() {
        dispatch(get_all_product())
    },
    _create_carts: function(data) {
        dispatch(create_cart(data))
    },
    get_all_carts: function(id) {
        dispatch(get_all_cart(id))
    },
    _delete_cart_by_id: function(id) {
        dispatch(delete_cart(id))
    },
    _create_end: function() {
        dispatch(create_cart_end())
    },
    _update_amount_cart: function(data) {
        dispatch(update_mount_cart(data))
    },
    _create_order: function(data) {
        dispatch(create_order(data))
    }
})

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(Checkout);
