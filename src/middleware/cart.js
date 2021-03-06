"use strict";

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { CART } from './../store/actions/types';

import {
    create_cart,
    create_cart_success,
    create_cart_fail,
    create_cart_end,
    get_all_cart_fail,
    get_all_cart_success,
    delete_fail,
    delete_success,
    update_mount_success,
    update_mount_fail
} from './../store/actions/cart'

function* handler_create_cart(action) {
    const datareq = {
        "amount": 1,
        "product_id": action.data.id,
        "user_id": "0"
    }
    try {
        const data = yield axios.post('/api/auth/cart', datareq)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(create_cart_success(data))
    } catch {
        yield put(create_cart_fail("Error"))
    }
}

function* handler_get_all_cart(action) {
    try {
        const data = yield axios.get(`/api/auth/cart/${action.id}`)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(get_all_cart_success(data))
        yield put(create_cart_end())
    } catch {
        yield put(get_all_cart_fail("Error"))
    }
}

function* handler_delete_cart(action) {
    try {
        const data = yield axios.delete(`/api/auth/cart/${action.id}`)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })

        yield put(delete_success(data))
    } catch {
        yield put(delete_fail("Error"))
    }
}

function* handler_update_mount_cart(action) {
    const datareq = {
        "amount": action.data.amount
    }
    try {
        const data = yield axios.put(`/api/auth/cart/${action.data.id}`, datareq)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(update_mount_success(data))
    } catch {
        yield put(update_mount_fail("Error"))
    }
}

export function* cart_of_production() {
    yield takeEvery(CART.CREATE_CART, handler_create_cart)
    yield takeEvery(CART.GET_ALL_CART, handler_get_all_cart)
    yield takeEvery(CART.DELETE_CART, handler_delete_cart)
    yield takeEvery(CART.UPDATE_MOUNT_CART, handler_update_mount_cart)

}