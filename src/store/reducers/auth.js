import { AUTH } from "../actions/types";
import { CardActions } from "@material-ui/core";

//@initialization state
const initialState = {
    loading: true,
    error: {
        message:""
    },
    data: {}
}

//@create mothod
const user_start = (state, action) => {
    return { 
        loading: true,
        error: {
            message:""
        },
        data: {}
    }
}

//@login success
const user_login_success = (state, action) => {
    return { 
        loading: false,
        error: {
            message:""
        },
        data: action.data
    }
}

//@login fail
const user_login_fail = (state, action) => {
    console.log(action)
    return { 
        loading: false,
        error: {
            message: action.error, 
        },
        data: {}
    }
}

//@compare to return
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH.START:
            return user_start(state, action)
        case AUTH.LOGIN_SUCCESS:
            return user_login_success(state, action)
        case AUTH.LOGIN_FAIL:
            return user_login_fail(state, action)
        default:
            return state
    }
}
