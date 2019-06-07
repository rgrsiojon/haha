"use strict";
import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';
import { USER } from '../store/actions/types';

import { 
    userStart, 
    userLoginSuccess, 
    userLoginFail 
} from '../store/actions/user';

function* handleUserLogin(actions) {
    // const auth = yield select(state => state.auth.token);
        // console.log("ok")
        console.log(actions)
    const datareq = {
        "email": actions.data.email,
        "password": actions.data.password,
        "store_name": "1"
    }
    try {
        const data = yield axios.post("/api/staff/sign_in", datareq)
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
