"use strict";
import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';
import { USER } from '../store/actions/types';

import { 
    userStart, 
    userLoginSuccess, 
    userLoginFail 
} from '../store/actions/user';

function* handleUserLogin(action) {
    // const auth = yield select(state => state.auth.token);
        // console.log("ok")
    const datareq = {
        "email": "hacnguyen1412@gmail.com",
        "password": "1234567",
        "store_name": "1"
    }
    console.log(action)
    try {
        const data = yield axios.post("http://178.128.62.214:7007/staff/sign_in", datareq)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        yield put({ type: USER.LOGIN_SUCCESS, data })
    } catch (error) {
        yield put({ type: USER.LOGIN_FAIL, error })
    }
}

export function* login() {
    yield takeEvery(USER.LOGIN, handleUserLogin)
}
