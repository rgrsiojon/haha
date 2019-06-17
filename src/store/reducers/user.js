import { USER } from './../actions/types'

const initialization = {
    is_loading: null,
    data_users: null,
    is_created: null,
    user_info: null,
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
        data_users: action.data
    }
}

function get_all_users_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error,
    }
}

function get_user_info(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function get_user_info_success(state, action) {
    return {
        ...state,
        is_loading: false,
        user_info: action.data
    }
}

function get_user_info_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error,
    }
}

function update_user_info(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function update_user_info_success(state, action) {
    return {
        ...state,
        is_loading: false,
        user_info: action.data
    }
}

function update_user_info_fail(state, action) {
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

        case USER.GET_INFO:
            return get_user_info(state, action)
        case USER.GET_INFO_SUCCESS:
            return get_user_info_success(state, action)
        case USER.GET_INFO_FAIL:
            return get_user_info_fail(state, action)

        case USER.UPDATE_INFO:
            return update_user_info(state, action)
        case USER.UPDATE_INFO_SUCCESS:
            return update_user_info_success(state, action)
        case USER.UPDATE_INFO_FAIL:
            return update_user_info_fail(state, action)
        default:
            return state
    }
}