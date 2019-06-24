import { ORDER } from './../actions/types'

const initialization = {
    is_loading: null,
    data: null,
    data_all_order: null,
    data_order: null,
    is_created: null,
    error: null
}

function create_order(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function create_order_succes(state, action) {
    return {
        ...state,
        is_loading: false,
        data: action.data,
        is_created: true
    }
}

function create_order_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error,
        is_created: false
    }
}

function get_all_order(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function get_all_order_success(state, action) {
    return  {
        ...state,
        is_loading: false,
        data_all_order: action.data
    }
}

function get_all_order_fail(state, action) {
    return  {
        ...state,
        is_loading: false,
        error: action.error
    }
}

function get_order_by_id(state, action) {
    return {
        ...state,
        is_loading: true,
    }
}

function get_order_by_id_success(state, action) {
    return {
        ...state,
        is_loading: false,
        data_order: action.data
    }
}

function get_order_by_id_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error
    }
}

export default (state = initialization, action) => {
    switch (action.type) {
        //@ Create order
        case ORDER.CREATE_ORDER:
            return create_order(state, action)
        case ORDER.CREATE_ORDER_SUCCESS:
            return create_order_succes(state, action)
        case ORDER.CREATE_ORDER_FAIL:
            return create_order_fail(state, action)
        //@get all order
        case ORDER.GET_ALL_ORDERS:
            return get_all_order(state, action)
        case ORDER.GET_ALL_ORDERS_SUCCESS:
            return get_all_order_success(state, action)
        case ORDER.GET_ALL_ORDERS_FAIL:
            return get_all_order_fail(state, action)
        //@get order by id
        case ORDER.GET_ORDER_BY_ID:
            return get_order_by_id(state, action)
        case ORDER.GET_ORDER_BY_ID_SUCCESS:
            return get_order_by_id_success(state, action)
        case ORDER.GET_ORDER_BY_ID_FAIL:
            return get_order_by_id_fail(state, action)
        default:
            return state
    }
}