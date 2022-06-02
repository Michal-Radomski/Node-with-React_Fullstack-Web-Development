import {FETCH_USER} from "../actions/types";

const initialState: State = null;

const authReducer = function (state = initialState, action: Dispatch) {
  // console.log({action});
  switch (action.type) {
    case FETCH_USER:
      //* console.log("" || false) -> false
      return action.payload || false;

    default:
      return state;
  }
};

export default authReducer;
