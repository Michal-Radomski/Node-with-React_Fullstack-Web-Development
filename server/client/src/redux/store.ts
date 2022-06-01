import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";

import {composeWithDevTools} from "@redux-devtools/extension";

import rootReducer from "../reducers";

const middleware = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);
const enhancer = compose(middlewareEnhancer);
const composedEnhancers = composeWithDevTools(enhancer);
const store = createStore(rootReducer, composedEnhancers);

export default store;
