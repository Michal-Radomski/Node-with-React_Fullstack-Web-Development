import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from "redux-form";

import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

// CombineReducer (Reducer/index.ts)
const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  surveys: surveysReducer,
});

export default rootReducer;
