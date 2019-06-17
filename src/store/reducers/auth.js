import { AUTH } from "../actions/types";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

//@initialization state
const initial_state = {
    loading: null,
    error: null,
    data: cookies.get('auth')
}

//@create mothod
const user_start = (state, action) => {
    return { 
        ...state,
        loading: true
    }
}

//@login success
const user_login_success = (state, action) => {
    return { 
        ...state,
        loading: false,
        data: action.data
    }
}

//@login fail
const user_login_fail = (state, action) => {
    return { 
        ...state,
        loading: false,
        error: action.error
    }
}

const register = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}

const register_success = (state, action) => {
    return {
        ...state,
        loading: false,
        data: action.data
    }
}

const register_fail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}
//@compare to return
export default (state = initial_state, action) => {
    switch (action.type) {
        case AUTH.START:
            return user_start(state, action)
        case AUTH.LOGIN_SUCCESS:
            return user_login_success(state, action)
        case AUTH.LOGIN_FAIL:
            return user_login_fail(state, action)
        case AUTH.REGISTER:
            return register(state, action)
        case AUTH.REGISTER_SUCCESS:
            return register_success(state, action)
        case AUTH.REGISTER_FAIL:
            return register_fail(state, action)
        default:
            return state
    }
}
