import {combineReducers} from "redux";

import authReducer from "./authReducer";

// CombineReducer (Reducer/index.ts)
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
