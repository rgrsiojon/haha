import { connect } from "react-redux";
import SingIn from './../../components/SingIn/index'
import { USER } from './../../store/actions/types'

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    login: function(email, password) {
        dispatch({
            type: USER.LOGIN, 
            data: {
                email: email,
                password: password
            }
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingIn);
