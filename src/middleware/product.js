"use strict";

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { PRODUCT } from './../store/actions/types';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

import {
    get_all_product_fail,
    get_all_product_success,
    create_product_success,
    create_product_fail,
    delete_product_fail,
    delete_product_success,
    get_product_by_id_success,
    get_product_by_id_fail,
    update_product_fail,
    update_product_success,
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

function* handler_create_product(action) {
    const datareq = {
        "title": action.data.title,
        "description": action.data.descript,
        "cpu": action.data.cpu,
        "ram": action.data.ram,
        "disk": action.data.disk,
        "display": action.data.display,
        "color": action.data.color,
        "gpu": action.data.gpu,
        "amount": action.data.amount,
        "price": action.data.price,
        "avatar": ""
    }
    var bodyFormData = new FormData();
    bodyFormData.append('file', action.data.avatar); 

    try {
        const data_product_created = yield axios.post("/api/store/1/product", datareq)
        .then(response => {
            return response.data
        }).catch(err => {
            return err
        })
        const data = yield axios.post(`/api/store/1/product/${data_product_created.id}/image`, bodyFormData)
        .then(response => {
            return response.data
        }).catch(err => {
            return err
        })
        yield put(create_product_success(data))
    } catch{
        yield put(create_product_fail("error"))
    }
}

function* handler_delete_product(action) {
    try {
        const data_deletd = yield axios.delete(`/api/store/1/product/${action.id}`)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(delete_product_success(data_deletd))
        
        const data = yield axios.get("/api/store/1/product").then(response => {
            return response.data
        }).catch(error => {
            return error
        })

        yield put(get_all_product_success(data))

    } catch {
        yield put(delete_product_fail("Error"))
    }
}

function* handler_get_product_by_id(action) {
    try {
        const data = yield axios.get(`/api/store/1/product/${action.id}`)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(get_product_by_id_success(data))
    } catch {
        yield put(get_product_by_id_fail("Error"))
    }
}

function* handler_update_product(action) {
    const datareq = {
        "title": action.data.title,
        "description": action.data.descript,
        "cpu": action.data.cpu,
        "ram": action.data.ram,
        "disk": action.data.disk,
        "display": action.data.display,
        "color": action.data.color,
        "gpu": action.data.gpu,
        "amount": action.data.amount,
        "price": action.data.price
    }

    try {

        const data_updated = yield axios.put(`/api/store/1/product/${action.data.id}`, datareq)
        .then(response => {
            return response.data
        }).catch(error => {
            return error
        })
        yield put(update_product_success(data_updated))
    } catch {
        yield put(update_product_fail("Error"))
    }
}

export function* productional() {
    yield takeEvery(PRODUCT.GET_ALL, handler_get_all_product)
    yield takeEvery(PRODUCT.CREATE_PRODUCT, handler_create_product)
    yield takeEvery(PRODUCT.DELETE_PRODUCT, handler_delete_product)
    yield takeEvery(PRODUCT.GET_PRODUCT_BY_ID, handler_get_product_by_id)
    yield takeEvery(PRODUCT.UPDATE_PRODUCT, handler_update_product)
}
