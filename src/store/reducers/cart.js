import { CART } from './../actions/types'
import { defaultCipherList } from 'constants';

const initialization = {
    is_loading: null,
    data: null,
    is_created: null,
    error: null
}

function create_cart(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function create_cart_succes(state, action) {
    return {
        ...state,
        is_loading: false,
        data: action.data,
        is_created: true
    }
}

function create_cart_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error,
        is_created: false
    }
}

export default (state = initialization, action) => {
    switch (action.type) {
        case CART.CREATE_CART:
            return create_cart(state, action)
        case CART.CREATE_CART_SUCCESS:
            return create_cart_succes(state, action)
        case CART.CREATE_CART_FAIL:
            return create_cart_fail(state, action)
        default:
            return state
    }
}