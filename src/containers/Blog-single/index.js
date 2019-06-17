import { connect } from "react-redux";
import BlogSingle from '../../components/Blog-single'
import { get_top_product, get_product_by_id, get_comment_of_product, create_comment_of_product } from './../../store/actions/product'

const map_state_to_props = state => ({
    auth: state.auth,
    product: state.product,
    carts: state.carts,
})

const map_dispatch_to_props = dispatch => ({
    _get_product_by_id: function(id) {
        dispatch(get_product_by_id(id))
    },
    _get_top_product: function() {
        dispatch(get_top_product())
    },
    _get_comment_of_product: function(id) {
        dispatch(get_comment_of_product(id))
    },
    _create_carts: function(data) {
        dispatch(create_cart(data))
    },
    _create_cart_end: function() {
        dispatch(create_cart_end())
    },
    _create_comment_for_product: function(data) {
        dispatch(create_comment_of_product(data))
    }
})

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(BlogSingle);
