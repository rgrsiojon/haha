import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import authReducer from "./store/reducers/auth";
import rootSaga from './middleware/root_saga';

const rootReducer = combineReducers({
    auth: authReducer
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