import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from "redux-form";

import authReducer from "./authReducer";

// CombineReducer (Reducer/index.ts)
const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
});

export default rootReducer;
