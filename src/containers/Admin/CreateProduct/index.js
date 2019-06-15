import { connect } from "react-redux";
import CreateProduct from './../../../components/Admin/CreateProduct/index'

export default connect( state => {
    return {
        auth: state.auth
    }
})(CreateProduct);