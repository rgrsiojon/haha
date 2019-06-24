import { connect } from "react-redux";
import Order from './../../../components/Admin/Order'

import { 
    get_order_by_id
} from './../../../store/actions/order'

import { 
    get_user_info
} from './../../../store/actions/user'


const map_state_to_props = state => ({
    auth: state.auth, 
    order: state.order,
    user: state.user
})

const map_dispatch_to_props = dispatch => ({
    _get_order_by_id: function(id) {
        dispatch(get_order_by_id(id))
    },
    _get_user_by_id: function(id) {
        dispatch(get_user_info(id))
    }
})

export default connect( 
    map_state_to_props,
    map_dispatch_to_props
)(Order);
