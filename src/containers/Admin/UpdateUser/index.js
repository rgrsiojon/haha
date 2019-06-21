import { connect } from "react-redux";
import UpdateUser from './../../../components/Admin/UpdateUser'
import { 
    get_user_info,
    update_user_info
} from './../../../store/actions/user'


const map_state_to_props = state => ({
    auth: state.auth, 
    user: state.user
})

const map_dispatch_to_props = dispatch => ({
    _get_user_info: function(id) {
        dispatch(get_user_info(id))
    },
    _update_user_info: function(data) {
        dispatch(update_user_info(data))
    }
})

export default connect( 
    map_state_to_props,
    map_dispatch_to_props
)(UpdateUser);
