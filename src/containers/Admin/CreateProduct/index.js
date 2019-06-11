import { CreateProduct } from './../../../components/Admin/CreateProduct';
import { connect } from 'redux';

export default connect( state => (
    {
        auth: ""
    }
))(CreateProduct)