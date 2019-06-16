import { CART } from './types'

export const create_cart = (data) => {
    return {
        type: CART.CREATE_CART,
        data: data
    }
}

export const create_cart_success = (data) => {
    return {
        type: CART.CREATE_CART_SUCCESS,
        data: data
    }
}

export const create_cart_fail = (error) => {
    return {
        type: CART.CREATE_CART_FAIL,
        error: error
    }
}
