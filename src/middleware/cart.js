"use strict";

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { CART } from './../store/actions/types';

import {
    create_cart,
    create_cart_success,
    create_cart_fail,
    get_all_cart,
    get_all_cart_fail,
    get_all_cart_success
} from './../store/actions/cart'

function* handler_create_cart(action) {
    const datareq = {
        "amount": action.data.amount,
        "product_id": action.data.id,
        "user_id": "1"
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

function* handler_get_all_cart() {
    try {
        const data = yield axios.get('/api/auth/cart/1')
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(get_all_cart_success(data))
    } catch {
        yield put(get_all_cart_fail("Error"))
    }
}

export function* cart_of_production() {
    yield takeEvery(CART.CREATE_CART, handler_create_cart)
    yield takeEvery(CART.GET_ALL_CART, handler_get_all_cart)

}