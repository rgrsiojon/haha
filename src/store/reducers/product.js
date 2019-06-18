import { PRODUCT } from './../actions/types';

const intialization_state = {
    is_loading: null,
    is_created: null,
    is_deleted: null,
    is_updated: null,
    product_top: null,
    comment: null,
    product: null,
    created_comment: null,
    data_comment: null,
    data: null,
    error: null
}

function product_start(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function get_all_product(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function get_all_product_success(state, action) {
    return {
        ...state,
        is_loading: false,
        data: action.data
    }
}

function get_all_product_fail(state, action) {
    return  {
        ...state,
        is_loading: false,
        error: action.error
    }
}

function create_product(state, action) {
    return {
        ...state,
        is_loading: true,
    }
}

function create_product_success(state, action) {
    return {
        ...state,
        is_loading: false,
        is_created: true,
        data: action.data
    }
}

function create_product_fail(state, action) {
    return {
        ...state, 
        is_loading: false,
        is_created: false,
        error: action.error
    }
}

function delete_product(state, action) {
    return {
        ...state, 
        is_loading: true
    }
}

function delete_product_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        data: action.data,
        is_deleted: false
    }
}

function delete_product_success(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error,
        is_deleted: true
    }
}

function update_product(state, action) {
    return {
        ...state,
        is_updated: true,
    }
}

function update_product_success(state, action) {
    return {
        ...state,
        is_updated: true
    }
}

function update_product_fail(state, action) {
    return {
        ...state,
        is_updated: false,
        error: action.error 
    }
}

function get_product_by_id(state, action) {
    return {
        ...state,
        is_loading: true,
    }
}

function get_product_by_id_success(state, action) {
    return {
        ...state,
        is_loading: false,
        product: action.data
    }
}

function get_product_by_id_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error 
    }
}

function get_top_product(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function get_top_product_sucess(state, action) {
    return {
        ...state,
        is_loading: false,
        product_top: action.data
    }
}

function get_top_product_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error
    }
}

function get_comment_of_product(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function get_comment_of_product_sucess(state, action) {
    return {
        ...state,
        is_loading: false,
        comment: action.data
    }
}

function get_comment_of_product_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        error: action.error
    }
}

function create_comment_of_product(state, action) {
    return {
        ...state,
        is_loading: true
    }
}

function create_comment_of_product_sucess(state, action) {
    console.log("vaof ddabasdkf")
    return {
        ...state,
        is_loading: false,
        created_comment: true,
        data_comment: action.data

    }
}

function create_comment_of_product_fail(state, action) {
    return {
        ...state,
        is_loading: false,
        created_comment: false
    }
}

function create_comment_of_product_end(state, action) {
    return {
        ...state,
        is_loading: false,
        created_comment: null
    }
}

export default (state = intialization_state, action) => {
    switch (action.type) {
        case PRODUCT.START:
            return product_start(state, action);
        
        //@ get all product 
        case PRODUCT.GET_ALL_SUCCESS:
            return get_all_product_success(state, action);
        case PRODUCT.GET_ALL_FAIL:
            return get_all_product_fail(state, action);
        case PRODUCT.GET_ALL:
            return get_all_product(state, action);
        
        //@ create product
        case PRODUCT.CREATE_PRODUCT:
            return create_product(state, action);
        case PRODUCT.CREATE_PRODUCT_SUCCESS:
            return create_product_success(state, action);
        case PRODUCT.CREATE_PRODUCT_FAIL:
            return create_product_fail(state, action);
        
        //@ delete product
        case PRODUCT.DELETE_PRODUCT:
            return delete_product(state, action);
        case PRODUCT.DELETE_PRODUCT_FAIL:
            return delete_product_fail(state, action)
        case PRODUCT.DELETE_PRODUCT_SUCCESS:
            return delete_product_success(state, action)
        
        //@ update product
        case PRODUCT.UPDATE_PRODUCT:
            return update_product(state, action);
        case PRODUCT.UPDATE_PRODUCT_SUCCESS:
            return update_product_success(state, action)
        case PRODUCT.UPDATE_PRODUCT_FAIL:
            return update_product_fail(state, action)

        //@ get produt by id
        case PRODUCT.GET_PRODUCT_BY_ID:
            return get_product_by_id(state, action);
        case PRODUCT.GET_PRODUCT_BY_ID_SUCCESS:
            return get_product_by_id_success(state, action)
        case PRODUCT.GET_PRODUCT_BY_ID_FAIL:
            return get_product_by_id_fail(state, action)

        //@ get top product
        case PRODUCT.GET_TOP_PRODUCT:
            return get_top_product(state, action)
        case PRODUCT.GET_TOP_PRODUCT_SUCCESS:
            return get_top_product_sucess(state, action)
        case PRODUCT.GET_TOP_PRODUCT_FAIL:
            return get_top_product_fail(state, action)

        //@ get coment of product
        case PRODUCT.GET_COMMENT_BY_ID:
            return get_comment_of_product(state, action)
        case PRODUCT.GET_COMMENT_BY_ID_SUCCESS:
            return get_comment_of_product_sucess(state, action)
        case PRODUCT.GET_COMMENT_BY_ID_FAIL:
            return get_comment_of_product_fail(state, action)
        
        //@ Create commen for product 
        case PRODUCT.CREATE_COMMENT_FOR_PRODUCT:
            return create_comment_of_product(state, action)
        case PRODUCT.CREATE_COMMENT_FOR_PRODUCT_SUCCESS:
            return create_comment_of_product_sucess(state, action)
        case PRODUCT.CREATE_COMMENT_FOR_PRODUCT_FAIL:
            return create_comment_of_product_fail(state, action)
        case PRODUCT.CREATE_COMMENT_FOR_PRODUCT_END:
            return create_comment_of_product_end(state, action)
        default: 
            return state;
    }
}

