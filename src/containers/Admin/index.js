import { connect } from "react-redux";
import Admin from './../../components/Admin'
import { get_all_product } from './../../store/actions/product'
import { delete_product } from './../../store/actions/product'

const map_state_to_props = state => ({
    product: state.product
})

const map_dispatch_to_props = dispatch => ({
    get_all_products: function() {
        dispatch(get_all_product())
    },

    delete_product: function(id) {
        dispatch(delete_product(id))
    }
})

export default connect( 
    map_state_to_props,
    map_dispatch_to_props
)(Admin);
