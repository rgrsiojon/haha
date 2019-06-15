import { connect } from "react-redux";
import CreateProduct from './../../../components/Admin/CreateProduct/index'
import { PRODUCT } from './../../../store/actions/types'

const mapStateToProps = state => ({
    auth: state.auth,
    product: state.product
})

const mapDispatchToProps = dispatch => ({
    create_product: function(data) {
        dispatch({
            type: PRODUCT.CREATE_PRODUCT, 
            data: data
        })
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateProduct);