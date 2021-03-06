import {createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";

import rootReducer from "./reducers";

// const middleware = [reduxThunk];
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

//* The same as above
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;
