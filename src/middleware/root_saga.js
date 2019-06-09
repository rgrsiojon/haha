import { all } from 'redux-saga/effects'
import { authentication } from './auth';
import { productional } from './product';

export default function* rootSaga() {
    yield all([
        authentication(),
        productional()
    ])
}
