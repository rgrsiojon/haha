import { connect } from "react-redux";
import BlogSingle from '../../components/Blog-single'
const map_state_to_props = state => ({
    product: state.product
})

const map_dispatch_to_props = dispatch => ({

})

export default connect(
    map_state_to_props,
    map_dispatch_to_props
)(BlogSingle);
