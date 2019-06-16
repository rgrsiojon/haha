import { connect } from "react-redux";
import Home from '../../components/Home'
// import { get_all_product } from './../../store/actions/product'

const map_state_to_props = state => ({
    product: state.product
})

const map_dispatch_to_props = dispatch => ({
    get_all_products: function() {
        dispatch(get_all_product())
    }
})

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(Home);
