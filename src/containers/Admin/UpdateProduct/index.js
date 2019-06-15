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


})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateProduct);