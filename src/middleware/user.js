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
    console.log(action.data.file)
    const datareq = {
        "email": action.data.email,
        "address": action.data.address,
        "phone": action.data.phone
    }

    var bodyFormData = new FormData();
    bodyFormData.append('file', action.data.file); 
    try {
        const data_user_update = yield axios.put(`/api/auth/info/${action.data.id}`, datareq)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(update_user_info_success(data_user_update))
        const data = yield axios.put(`/api/auth/info/${action.data.id}/avatar`, bodyFormData)
        .then(response => {
            return response.data
        }).catch(err => {
            return err
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