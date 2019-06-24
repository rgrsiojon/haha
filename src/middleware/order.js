"use strict";

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { ORDER } from './../store/actions/types';

import {
    create_order_fail,
    create_order_success,
    get_all_orders_fail,
    get_all_orders_success,
    get_order_by_id_fail,
    get_order_by_id_success
} from './../store/actions/order'

function* handler_order_cart(action) {
    const datareq = {
        "shipping_address": action.data.shipping_address,
        "phone": action.data.phone,
        "array_id": action.data.array_id.map(i=> {
            return {
                "id": i.id
            }
        }),
        "user_id": "1",
        "store_id" : "1"
    }
    try {
        const data = yield axios.post('/api/auth/order', datareq)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(create_order_success(data))
    } catch {
        yield put(create_order_fail("Error"))
    }
}

function* handler_get_all_order() {
    try {
        const data = yield axios.get('/api/auth/order/1')
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(get_all_orders_success(data))
    } catch {
        yield put(get_all_orders_fail("Error"))
    }
}

function* handler_get_order_by_id(action) {
    try {
        const data = yield axios.get(`/api/auth/info_order/${action.id}`)
        .then(reponse => {
            return reponse.data
        }).catch(error=> {
            return error
        })
        yield put(get_order_by_id_success(data))
    } catch {
        yield put(get_order_by_id_fail("Error"))
    }
}

export function* order_of_production() {
    yield takeEvery(ORDER.CREATE_ORDER, handler_order_cart)
    yield takeEvery(ORDER.GET_ALL_ORDERS, handler_get_all_order)
    yield takeEvery(ORDER.GET_ORDER_BY_ID, handler_get_order_by_id)
}