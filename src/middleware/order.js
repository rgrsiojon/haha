"use strict";

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { CART } from './../store/actions/types';

import {
    create_order,
    create_order_fail,
    create_order_success
} from './../store/actions/order'

function* handler_create_cart(action) {
    const datareq = {
        "total_pay": 10000000,
        "shipping_address": "208 nguyen huu canh",
        "array_id": [
            {"id" : "4"},
            {"id" : "5"},
            {"id" : "7"}],
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

export function* order_of_production() {
    yield takeEvery(CART.CREATE_CART, handler_create_cart)
    yield takeEvery(CART.GET_ALL_CART, handler_get_all_cart)

}