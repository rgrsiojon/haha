import { all } from 'redux-saga/effects'
import { authentication } from './auth';
import { productional } from './product';
import { cart_of_production } from './cart'
import { user } from './user'
import { order_of_production } from './order'

export default function* rootSaga() {
    yield all([ 
        authentication(),
        productional(),
        cart_of_production(),
        user(),
        order_of_production()
    ])
}
