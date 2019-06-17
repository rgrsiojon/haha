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