import { PRODUCT } from './../actions/types';

const intialization_state = {
    is_loading: true,
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
        default: 
            return state;
    }
}