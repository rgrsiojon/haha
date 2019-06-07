import { USER } from './types';

export const userStart = () => {
    return{
        type: USER.START
    }
};

export const userLoginSuccess = (data) => {
    return{
        type: USER.LOGIN_SUCCESS,
        data: data
    }
};

export const userLoginFail = (data) => {
    return{
        type: USER.LOGIN_FAIL,
        data: data
    }
};
