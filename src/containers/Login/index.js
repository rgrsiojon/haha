import { connect } from "react-redux";
import Login from './../../components/Login'
import { AUTH } from './../../store/actions/types'

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
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
