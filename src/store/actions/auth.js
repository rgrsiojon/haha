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

export const auth_login_fail = (error) => {
    return {
        type: AUTH.LOGIN_FAIL,
        error: error
    }
};

export const register = (data) => {
    return{
        type: AUTH.REGISTER,
        data: data
    }
};

export const register_success = (data) => {
    return{
        type: AUTH.REGISTER_SUCCESS,
        data: data
    }
};

export const register_fail = (error) => {
    return {
        type: AUTH.REGISTER_FAIL,
        error: error
    }
};
