import { ORDER } from './types'

export const create_order = (data) => {
    return {
        type: ORDER.CREATE_ORDER,
        data: data
    }
}

export const create_order_success = (data) => {
    return {
        type: ORDER.CREATE_ORDER_SUCCESS,
        data: data
    }
}

export const create_order_fail = (error) => {
    return {
        type: ORDER.CREATE_ORDER_FAIL,
        error: error
    }
}
