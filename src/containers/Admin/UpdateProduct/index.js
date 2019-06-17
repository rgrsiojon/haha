import { connect } from "react-redux";
import UpdateProduct from './../../../components/Admin/UpdateProduct'
import { PRODUCT } from './../../../store/actions/types'

const mapStateToProps = state => ({
    auth: state.auth,
    product: state.product
})

const mapDispatchToProps = dispatch => ({
    update_product: function(data) {
        dispatch({
            type: PRODUCT.UPDATE_PRODUCT, 
            data: data
        })
    },
    _get_product_by_id: function(id) {
        dispatch({ 
            type: PRODUCT.GET_PRODUCT_BY_ID,
            id: id
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateProduct);