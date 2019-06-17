"use strict";
import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';
import { AUTH } from '../store/actions/types';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

import { 
    auth_start, 
    auth_login_success, 
    auth_login_fail,
    register_success,
    register_fail
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
            cookies.set('auth', response.data, { path: '/' });
            return response.data
        })
        yield put(auth_login_success(data))
    } catch (err) {
        yield put(auth_login_fail(err))
    }
}

function* handler_register_with_email(action) {
    const datareq = {
        "email": action.data.email,
        "password": action.data.password,
    } 
    try {
        const data = yield axios.post("/api/sign_up", datareq)
        .then(response => {
            cookies.set('auth', response.data, { path: '/' });
            return response.data
        })
        yield put(register_success(data))
    } catch {
        yield put(register_fail("Error"))
    }
}

export function* authentication() {
    yield takeEvery(AUTH.LOGIN, handler_login_with_email)
    yield takeEvery(AUTH.REGISTER, handler_register_with_email)
}
