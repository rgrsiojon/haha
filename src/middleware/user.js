"use strict";

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { USER } from './../store/actions/types';

import { 
    get_user_info_success,
    get_user_info_fail,
    update_user_info_fail,
    update_user_info_success
} from './../store/actions/user'

function* handler_get_user_info(action) {
    try {
        const data = yield axios.get(`/api/auth/info/${action.id}`) 
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(get_user_info_success(data))
    } catch {
        yield put(get_user_info_fail("Error"))
    }
}

function* handler_update_user_info(action) {
    const datareq = {
        "email": action.data.email,
        "address": action.data.address,
        "phone": action.data.phone
    }
    try {
        const data = yield axios.put(`/api/auth/info/${action.data.id}`, datareq)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(update_user_info_success(data))
    } catch {
        yield put(update_user_info_fail("Error"))
    }
}

export function* user() {
    yield takeEvery(USER.GET_INFO, handler_get_user_info)
    yield takeEvery(USER.UPDATE_INFO, handler_update_user_info)
}