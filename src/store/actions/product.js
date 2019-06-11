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