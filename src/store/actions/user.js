import { USER } from './types'

export const get_all_user = () => {
    return {
        type: USER.GET_ALL
    }
}

export const get_all_user_success = (data) => {
    return {
        type: USER.GET_ALL_SUCCESS,
        data: data
    }
}

export const get_all_user_fail = (error) => {
    return {
        type: USER.GET_ALL_FAIL,
        error: error
    }
}

export const get_user_info = (id) => {
    return {
        type: USER.GET_INFO,
        id: id
    }
}

export const get_user_info_success = (data) => {
    return {
        type: USER.GET_INFO_SUCCESS,
        data: data
    }
}

export const get_user_info_fail = (error) => {
    return {
        type: USER.GET_INFO_FAIL,
        error: error
    }
}

export const update_user_info = (data) => {
    return {
        type: USER.UPDATE_INFO,
        data: data
    }
}

export const update_user_info_success = (data) => {
    return {
        type: USER.UPDATE_INFO_SUCCESS,
        data: data
    }
}

export const update_user_info_fail = (error) => {
    return {
        type: USER.UPDATE_INFO_FAIL,
        error: error
    }
}