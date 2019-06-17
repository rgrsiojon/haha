import { connect } from "react-redux";
import BlogSingle from '../../components/Blog-single'
import { PRODUCT } from './../../store/actions/types'

const map_state_to_props = state => ({
    auth: state.auth,
    product: state.product
})

const map_dispatch_to_props = dispatch => ({
    _get_product_by_id: function(id) {
        dispatch({ 
            type: PRODUCT.GET_PRODUCT_BY_ID,
            id: id
        })
    }
})

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(BlogSingle);
