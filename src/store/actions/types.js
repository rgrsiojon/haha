export const AUTH = {
    //@Start
    START: "START",
    //@LOGIN
    LOGIN: "LOGIN",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    //@ REGISTER
    REGISTER: "REGISTER",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
    //@ REGISTER
    LOGOUT: "LOGOUT",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL"
}

export const PRODUCT = {
    START: "START",
    GET_ALL: "GET_ALL",
    GET_ALL_SUCCESS: "GET_ALL_SUCCESS",
    GET_ALL_FAIL: "GET_ALL_FAIL",

    CREATE_PRODUCT: "CREATE_PRODUCT",
    CREATE_PRODUCT_SUCCESS: "CREATE_PRODUCT_SUCCESS",
    CREATE_PRODUCT_FAIL: "CREATE_PRODUCT_FAIL",

    DELETE_PRODUCT: "DELETE_PRODUCT",
    DELETE_PRODUCT_SUCCESS: "DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_FAIL: "DELETE_PRODUCT_FAIL",

    GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID",
    GET_PRODUCT_BY_ID_SUCCESS: "GET_PRODUCT_BY_ID_SUCCESS",
    GET_PRODUCT_BY_ID_FAIL: "GET_PRODUCT_BY_ID_FAIL",

    UPDATE_PRODUCT: "UPDATE_PRODUCT",
    UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",
    UPDATE_PRODUCT_FAIL: "UPDATE_PRODUCT_FAIL",

    ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
    ADD_PRODUCT_TO_CART_SUCCESS: "ADD_PRODUCT_TO_CART_SUCCESS",
    ADD_PRODUCT_TO_CART_FAIL: "ADD_PRODUCT_TO_CART_FAIL",

    GET_TOP_PRODUCT: "GET_TOP_PRODUCT",
    GET_TOP_PRODUCT_SUCCESS: "GET_TOP_PRODUCT_SUCCESS",
    GET_TOP_PRODUCT_FAIL: "GET_TOP_PRODUCT_FAIL",

    GET_COMMENT_BY_ID: "GET_COMMENT_BY_ID",
    GET_COMMENT_BY_ID_SUCCESS: "GET_COMMENT_BY_ID_SUCCESS",
    GET_COMMENT_BY_ID_FAIL: "GET_COMMENT_BY_ID_FAIL",
    
    CREATE_COMMENT_FOR_PRODUCT: "CREATE_COMMENT_FOR_PRODUCT",
    CREATE_COMMENT_FOR_PRODUCT_SUCCESS: "CREATE_COMMENT_FOR_PRODUCT_SUCCESS",
    CREATE_COMMENT_FOR_PRODUCT_FAIL: "CREATE_COMMENT_FOR_PRODUCT_FAIL",
    CREATE_COMMENT_FOR_PRODUCT_END: "CREATE_COMMENT_FOR_PRODUCT_END",
}   

export const CART = {

    //@ create cart
    CREATE_CART: "CREATE_CART",
    CREATE_CART_SUCCESS: "CREATE_CART_SUCCESS",
    CREATE_CART_FAIL: "CREATE_CART_FAIL",
    CREATE_CART_END: "CREATE_CART_END",

    //@ getall cart
    GET_ALL_CART: "GET_ALL_CART",
    GET_ALL_CART_SUCCESS: "GET_ALL_CART_SUCCESS",
    GET_ALL_CART_FAIL: "GET_ALL_CART_FAIL",
    //@ delete cart
    DELETE_CART: "DELETE_CART",
    DELETE_SUCCESS: "DELETE_SUCCESS",
    DELETE_FAIL: "DELETE_FAIL",
    //@ delete cart
    UPDATE_MOUNT_CART: "UPDATE_MOUNT_CART",
    UPDATE_MOUNT_CART_SUCCESS: "UPDATE_MOUNT_CART_SUCCESS",
    UPDATE_MOUNT_CART_FAIL: "UPDATE_MOUNT_CART_FAIL",
    
}
export const ORDER = {
    //@CREATE order
    CREATE_ORDER: "CREATE_ORDER",
    CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
    CREATE_ORDER_FAIL: "CREATE_ORDER_FAIL",
}

export const SEARCH = {
    UPDATE: "UPDATE",
}

export const USER = {
    //@get all user
    GET_ALL: "GET_ALL",
    GET_ALL_SUCCESS: "GET_ALL_SUCCESS",
    GET_ALL_FAIL: "GET_ALL_FAIL",
    //@get user ìinfo
    GET_INFO: "GET_INFO",
    GET_INFO_SUCCESS: "GET_INFO_SUCCESS",
    GET_INFO_FAIL: "GET_INFO_FAIL",
    //@get user ìinfo
    UPDATE_INFO: "UPDATE_INFO",
    UPDATE_INFO_SUCCESS: "UPDATE_INFO_SUCCESS",
    UPDATE_INFO_FAIL: "UPDATE_INFO_FAIL"
}

