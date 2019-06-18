import { AUTH } from "../actions/types";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

//@initialization state
const initial_state = {
    loading: null,
    error: null,
    data: cookies.get('auth') !== undefined 
        ? cookies.get('auth')
        : cookies.get('admin')
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

const logout = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}

const logout_success = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const logout_fail = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const login_satff = (state, action) => {
    return {
        ...state,
        loading: true,
    }
}

const login_satff_success = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const login_satff_fail = (state, action) => {
    return {
        ...state,
        loading: false
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

        case AUTH.LOGOUT:
            return logout(state, action)
        case AUTH.LOGOUT_SUCCESS:
            return logout_success(state, action)
        case AUTH.LOGOUT_FAIL:
            return logout_fail(state, action)
        
        case AUTH.LOGIN_SATFF:
            return login_satff(state, action)
        case AUTH.LOGIN_SATFF_SUCCESS:
            return login_satff_success(state, action)
        case AUTH.LOGIN_SATFF_FAIL:
            return login_satff_fail(state, action)
        default:
            return state
    }
}
