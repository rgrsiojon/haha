import { connect } from "react-redux";
import Login from './../../components/Login'
import { AUTH } from './../../store/actions/types'
import { register } from './../../store/actions/auth'

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    login: function(email, password) {
        dispatch({
            type: AUTH.LOGIN, 
            data: {
                email: email,
                password: password
            }
        })
    },
    _register: function(data) {
        dispatch(register(data))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
