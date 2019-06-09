import { connect } from "react-redux";
import Header from './../../../components/Admin/Header'

export default connect( state => {
    return {
        auth: state.auth
    }
})(Header);

