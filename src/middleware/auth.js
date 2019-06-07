"use strict";
import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';
import { AUTH } from '../store/actions/types';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

import { 
    auth_start, 
    auth_login_success, 
    auth_login_fail 
} from '../store/actions/auth';

function* handler_login_with_email(actions) {
    yield put(auth_start())
    const datareq = {
        "email": actions.data.email,
        "password": actions.data.password,
        "store_name": "1"
    }
    try {
        const data = yield axios.post("/api/staff/sign_in", datareq)
        .then(response => {
            cookies.set('token', response.data.token, { path: '/' });
            return response.data
        })
        yield put(auth_login_success(data))
    } catch (err) {
        yield put(auth_login_fail(err))
    }
}

export function* authentication() {
    yield takeEvery(AUTH.LOGIN, handler_login_with_email)
}
