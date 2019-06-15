import { PRODUCT } from './../actions/types';

const intialization_state = {
    is_loading: null,
    is_created: null,
    is_deleted: null,
    data: {},
    error: null
}

function product_start(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function get_all_product(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function get_all_product_success(state, action) {
    return {
        ...state,
        is_loading: false,
        data: action.data
    }
}

function get_all_product_fail(state, action) {
    return  {
        ...state,
        is_loading: false,
        error: action.error
    }
}

function create_product(state, action) {
    return {
        ...state,
        is_loading: true,
    }
}

function create_product_success(state, action) {
    return {
        ...state,
        is_loading: false,
        is_created: true,
        data: action.data
    }
}

function create_product_fail(state, action) {
    return {
        ...state, 
        is_loading: false,
        is_created: false,
        error: action.error
    }
}

function delete_product(state, action) {
    return {
        ...state, 
        is_loading: true
    }
}

function delete_product_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        data: action.data,
        is_deleted: false
    }
}

function delete_product_success(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error,
        is_deleted: true
    }
}

export default (state = intialization_state, action) => {
    switch (action.type) {
        case PRODUCT.START:
            return product_start(state, action);
        case PRODUCT.GET_ALL_SUCCESS:
            return get_all_product_success(state, action);
        case PRODUCT.GET_ALL_FAIL:
            return get_all_product_fail(state, action);
        case PRODUCT.GET_ALL:
            return get_all_product(state, action);
        case PRODUCT.CREATE_PRODUCT:
            return create_product(state, action);
        case PRODUCT.CREATE_PRODUCT_SUCCESS:
            return create_product_success(state, action);
        case PRODUCT.CREATE_PRODUCT_FAIL:
            return create_product_fail(state, action);
        case PRODUCT.DELETE_PRODUCT:
            return delete_product(state, action);
        case PRODUCT.DELETE_PRODUCT_FAIL:
            return delete_product_fail(state, action)
        case PRODUCT.CREATE_PRODUCT_SUCCESS:
            return delete_product_success(state, action)
        default: 
            return state;
    }
}