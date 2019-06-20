import { connect } from "react-redux";
import UpdateUser from './../../../components/Admin/UpdateUser'
import {  } from './../../../store/actions/user'

const map_state_to_props = state => ({
    user: state.user
})

const map_dispatch_to_props = dispatch => ({

})

export default connect( 
    map_state_to_props,
    map_dispatch_to_props
)(UpdateUser);
