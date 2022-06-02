import axios from "axios";

import {FETCH_USER} from "./types";

// export const fetchUser = () => {
//   return function (dispatch: Dispatch) {
//     axios.get("./api/current_user").then((response) => dispatch({type: FETCH_USER, payload: response}));
//   };
// };

//* After refactoring
export const fetchUser = () => async (dispatch: Dispatch) => {
  const response = await axios.get("./api/current_user");
  dispatch({type: FETCH_USER, payload: response});
};
