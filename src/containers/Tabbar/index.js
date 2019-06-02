import { connect } from "react-redux";
import Tabbar from './../../components/Tabbar'

export default connect(state => {
    return {
        auth: ""
    }
})(Tabbar)