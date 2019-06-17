import { USER } from './../actions/types'

const initialization = {
    is_loading: null,
    data_user: null,
    is_created: null,
    error: null
}

function get_users_all(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function get_all_users_success(state, action) {
    return {
        ...state,
        is_loading: false,
        data_user: action.data
    }
}

function get_all_users_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error,
    }
}

export default (state = initialization, action) => {
    switch (action.type) {
        //@ Create cart
        case USER.GET_ALL:
            return get_users_all(state, action)
        case USER.GET_ALL_SUCCESS:
            return get_all_users_success(state, action)
        case USER.GET_ALL_FAIL:
            return get_all_users_fail(state, action)
        default:
            return state
    }
}