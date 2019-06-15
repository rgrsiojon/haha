import { PRODUCT } from './types';

export const product_start = () => {
    return {
        type: PRODUCT.START
    }
}

export const get_all_product = () => {
    return {
        type: PRODUCT.GET_ALL
    }
}

export const get_all_product_success = (data) => {
    return {
        type: PRODUCT.GET_ALL_SUCCESS,
        data: data
    }
}

export const get_all_product_fail = (error) => {
    return {
        type: PRODUCT.GET_ALL_FAIL,
        error: error
    }
}

export const create_product = (data) => {
    return {
        type: PRODUCT.CREATE_PRODUCT,
        data: data
    }
}

export const create_product_success = (data) => {
    return {
        type: PRODUCT.CREATE_PRODUCT_SUCCESS,
        data: data
    }
}

export const create_product_fail = (error) => {
    return {
        type: PRODUCT.CREATE_PRODUCT_FAIL,
        error: error
    }
}

export const delete_product_fail = (error) => {
    return {
        type: PRODUCT.DELETE_PRODUCT_FAIL,
        error: error
    }
}

export const delete_product_success = (data) => {
    return {
        type: PRODUCT.DELETE_PRODUCT_SUCCESS
    }
}

export const delete_product = (id) => {
    return {
        type: PRODUCT.DELETE_PRODUCT,
        id: id
    }
}