import { connect } from "react-redux";
import Orders from './../../../components/Admin/Orders'

import { 
    get_all_orders
} from './../../../store/actions/order'


const map_state_to_props = state => ({
    auth: state.auth, 
    order: state.order
})

const map_dispatch_to_props = dispatch => ({
    _get_all_orders: function() {
        dispatch(get_all_orders())
    }
})

export default connect( 
    map_state_to_props,
    map_dispatch_to_props
)(Orders);
