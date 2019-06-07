import { all } from 'redux-saga/effects'
import { login } from './user';
export default function* rootSaga() {
    yield all([
        login(),
    ])
}
