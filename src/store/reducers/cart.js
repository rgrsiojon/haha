import { CART } from './../actions/types'

const initialization = {
    is_loading: null,
    data: null,
    is_created: null,
    is_deleted: null,
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

function create_cart_end(state, action) {
    return {
        ...state,
        is_created: null,
        is_deleted: null
    }
}

function get_all_cart(state, action) {
    return {
        ...state, 
        is_loading: true,
    }
}

function get_all_cart_success(state, action) {
    return {
        ...state, 
        is_loading: false,
        data: action.data
    }
}

function get_all_cart_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error
    }
}

function delete_cart(state, action) {
    return {
        ...state, 
        is_loading: true,
    }
}

function delete_cart_success(state, action) {
    return {
        ...state, 
        is_loading: false,
        is_deleted: true
    }
}

function delete_cart_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error
    }
}

function update_mount_cart(state, action) {
    return {
        ...state, 
        is_loading: true,
    }
}

function update_mount_success(state, action) {
    return {
        ...state, 
        is_loading: false,
        is_created: null,
        is_deleted: null,
    }
}

function update_mount_cart_fail(state, action) {
    return {
        ...state,
        is_loading: false
    }
}

export default (state = initialization, action) => {
    switch (action.type) {
        //@ Create cart
        case CART.CREATE_CART:
            return create_cart(state, action)
        case CART.CREATE_CART_SUCCESS:
            return create_cart_succes(state, action)
        case CART.CREATE_CART_FAIL:
            return create_cart_fail(state, action)
        case CART.CREATE_CART_END:
            return create_cart_end(state, action)
        //@ get all cart
        case CART.GET_ALL_CART:
            return get_all_cart(state, action)
        case CART.GET_ALL_CART_SUCCESS:
            return get_all_cart_success(state, action)
        case CART.GET_ALL_CART_FAIL:
            return get_all_cart_fail(state, action)
        //@ get all cart
        case CART.DELETE_CART:
            return delete_cart(state, action)
        case CART.DELETE_SUCCESS:
            return delete_cart_success(state, action)
        case CART.DELETE_FAIL:
            return delete_cart_fail(state, action)
        //@ update mount cart
        case CART.UPDATE_MOUNT_CART:
            return update_mount_cart(state, action)
        case CART.UPDATE_MOUNT_CART_SUCCESS:
            return update_mount_success(state, action)
        case CART.UPDATE_MOUNT_CART_FAIL:
            return update_mount_cart_fail(state, action)
        default:
            return state
    }
}