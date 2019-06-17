import { SEARCH } from './../actions/types'

const initialization = {
    is_loading: null,
    content: ""
}

function handler_content(state, action) {
    return {
        ...state,
        content: action.content
    }
}

export default (state = initialization, action) => {
    switch (action.type) {
        //@ Create order
        case SEARCH.UPDATE:
            return handler_content(state, action)
        default:
            return state
    }
}