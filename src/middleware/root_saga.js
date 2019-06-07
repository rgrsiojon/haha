import { all } from 'redux-saga/effects'
import { authentication } from './auth';
export default function* rootSaga() {
    yield all([
        authentication(),
    ])
}
