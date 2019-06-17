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

export const get_product_by_id = (id) => {
    return {
        type: PRODUCT.GET_PRODUCT_BY_ID,
        id: id
    }
}

export const get_product_by_id_success = (data) => {
    return {
        type: PRODUCT.GET_PRODUCT_BY_ID_SUCCESS,
        data: data
    }
}

export const get_product_by_id_fail = (error) => {
    return {
        type: PRODUCT.GET_PRODUCT_BY_ID_FAIL,
        error: error
    }
}

export const update_product = (data) => {
    return {
        type: PRODUCT.UPDATE_PRODUCT,
        data: data
    }
}

export const update_product_success = (data) => {
    return {
        type: PRODUCT.UPDATE_PRODUCT_SUCCESS,
        data: data
    }
}

export const update_product_fail = (error) => {
    return {
        type: PRODUCT.UPDATE_PRODUCT_FAIL,
        error: error
    }
}

export const add_product_to_cart = (data) => {
    return {
        type: PRODUCT.ADD_PRODUCT_TO_CART,
        data: data
    }
}

export const add_product_to_cart_success = (data) => {
    return {
        type: PRODUCT.ADD_PRODUCT_TO_CART_SUCCESS,
        data: data
    }
}

export const add_product_to_cart_fail = (error) => {
    return {
        type: PRODUCT.ADD_PRODUCT_TO_CART_FAIL,
        error: error
    }
}

export const get_top_product = () => {
    return {
        type: PRODUCT.GET_TOP_PRODUCT
    }
}

export const get_top_product_success = (data) => {
    return {
        type: PRODUCT.GET_TOP_PRODUCT_SUCCESS,
        data: data
    }
}

export const get_top_product_fail = (error) => {
    return {
        type: PRODUCT.GET_TOP_PRODUCT_FAIL,
        error: error
    }
}

export const get_comment_of_product = (id) => {
    return {
        type: PRODUCT.GET_COMMENT_BY_ID,
        id: id
    }
}

export const get_comment_of_product_success = (data) => {
    return {
        type: PRODUCT.GET_COMMENT_BY_ID_SUCCESS,
        data: data
    }
}

export const get_comment_of_product_fail = (error) => {
    return {
        type: PRODUCT.GET_COMMENT_BY_ID_FAIL,
        error: error
    }
}

export const create_comment_of_product = (data) => {
    return {
        type: PRODUCT.CREATE_COMMENT_FOR_PRODUCT,
        data: data
    }
}

export const create_comment_of_product_success = (data) => {
    return {
        type: PRODUCT.CREATE_COMMENT_FOR_PRODUCT_SUCCESS,
        data: data
    }
}

export const create_comment_of_product_fail = (error) => {
    return {
        type: PRODUCT.CREATE_COMMENT_FOR_PRODUCT_FAIL,
        error: error
    }
}

export const create_comment_of_product_end = (error) => {
    return {
        type: PRODUCT.CREATE_COMMENT_FOR_PRODUCT_END,
        error: error
    }
}