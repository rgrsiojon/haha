import { connect } from "react-redux";
import Users from './../../../components/Admin/Users/index'
import { get_all_user } from './../../../store/actions/user'

const map_state_to_props = state => ({
    user: state.user
})

const map_dispatch_to_props = dispatch => ({
    _get_all_users: function() {
        dispatch(get_all_user())
    }
})

export default connect( 
    map_state_to_props,
    map_dispatch_to_props
)(Users);
