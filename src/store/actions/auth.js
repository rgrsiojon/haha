import { AUTH } from './types';

export const auth_start = () => {
    return{
        type: AUTH.START
    }
};

export const auth_login_success = (data) => {
    return{
        type: AUTH.LOGIN_SUCCESS,
        data: data
    }
};

export const auth_login_fail = (data) => {
    return {
        type: AUTH.LOGIN_FAIL,
        error: Error(data)
    }
};
