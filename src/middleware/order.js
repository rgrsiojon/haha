"use strict";

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { ORDER } from './../store/actions/types';

import {
    create_order_fail,
    create_order_success
} from './../store/actions/order'

function* handler_order_cart(action) {
    console.log(action.data)
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
    console.log(action.data)
    console.log(datareq)
    try {
        const data = yield axios.post('/api/auth/order', datareq)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        console.log(data)
        yield put(create_order_success(data))
    } catch {
        yield put(create_order_fail("Error"))
    }
}

export function* order_of_production() {
    yield takeEvery(ORDER.CREATE_ORDER, handler_order_cart)

}