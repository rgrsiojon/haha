import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import auth_reducer from "./store/reducers/auth";
import product_reducer from './store/reducers/product'
import cart_reducer from './store/reducers/cart';
import search_reducer from './store/reducers/search'
import user_reducer from './store/reducers/user'
import order_reducer from './store/reducers/order'
import rootSaga from './middleware/root_saga';

const rootReducer = combineReducers({
    auth: auth_reducer,
    product: product_reducer,
    carts: cart_reducer,
    search: search_reducer,
    user: user_reducer,
    order: order_reducer
});

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
// serviceWorker.unregister();

module.hot.accept();