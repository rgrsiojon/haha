"use strict";

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { PRODUCT } from './../store/actions/types';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

import {
    get_all_product_fail,
    get_all_product_success,
    product_start,
} from './../store/actions/product'

function* handler_get_all_product(action) {
    try {
        const data = yield axios.get("/api/store/1/product").then(response => {
            return response.data
        }).catch(error => {
            return error
        })

        yield put(get_all_product_success(data))
    } catch {
        yield put(get_all_product_fail({
            error: "something error "
        }))
    }
}

export function* productional() {
    yield takeEvery(PRODUCT.GET_ALL, handler_get_all_product)
}
