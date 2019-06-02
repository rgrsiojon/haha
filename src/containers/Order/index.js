import { connect } from "react-redux";
import Order from './../../components/Order'

export default connect( state => {
    return { auth: "" }
})(Order);
