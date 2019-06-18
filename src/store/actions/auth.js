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

export const logout = (data) => {
    return{
        type: AUTH.LOGOUT
    }
};

export const logout_success = (data) => {
    return{
        type: AUTH.LOGOUT_SUCCESS
    }
};

export const logout_fail = (error) => {
    return {
        type: AUTH.LOGOUT_FAIL,
        error: error
    }
};


export const login_satff = (data) => {
    return{
        type: AUTH.LOGIN_SATFF
    }
};

export const login_satff_success = (data) => {
    return{
        type: AUTH.LOGIN_SATFF_SUCCESS,
    }
};

export const login_satff_fail = (error) => {
    return {
        type: AUTH.LOGIN_SATFF_FAIL,
        error: error
    }
};
