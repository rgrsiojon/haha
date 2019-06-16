import { connect } from "react-redux";
import Home from '../../components/Home'
import { get_all_product, get_top_product } from './../../store/actions/product'
import { create_cart } from './../../store/actions/cart'

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
    _get_top_product: function() {
        dispatch(get_top_product())
    }
})

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(Home);
