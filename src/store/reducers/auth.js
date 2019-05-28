import * as actionTypes from "../actions/actionTypes";

const initialState = {
    token: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return { token: "null" }
        case actionTypes.AUTH_SUCCESS:
            return {}
        default:
            return state
    }
};

export default reducer;
