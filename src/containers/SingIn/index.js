import { connect } from "react-redux";
import SingIn from './../../components/SingIn/index'
import { AUTH } from './../../store/actions/types'

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    login: function(email, password) {
        dispatch({
            type: AUTH.LOGIN_SATFF, 
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
