import { connect } from "react-redux";
import Profile from './../../components/Profile'
import { 
    get_user_info,
    update_user_info
} from './../../store/actions/user'

const mapStateToProps = state => ({
    auth: state.auth, 
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    _get_user_info: function(id) {
        dispatch(get_user_info(id))
    },
    _update_user_info: function(data) {
        dispatch(update_user_info(data))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
