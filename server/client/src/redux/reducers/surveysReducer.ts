import {FETCH_SURVEYS} from "../actions/types";

const initialState: State = [];

const surveysReducer = function (state = initialState, action: Dispatch) {
  // console.log({action});
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;

    default:
      return state;
  }
};

export default surveysReducer;
