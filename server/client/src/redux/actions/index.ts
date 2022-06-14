import axios from "axios";
import {Token} from "react-stripe-checkout";

import {FETCH_USER} from "./types";

// export const fetchUser = () => {
//   return function (dispatch: Dispatch) {
//     axios.get("/api/current_user").then((response) => dispatch({type: FETCH_USER, payload: response?.data}));
//   };
// };

// //* After refactoring
// export const fetchUser = () => async (dispatch: Dispatch) => {
//   const response = await axios.get("/api/current_user");
//   dispatch({type: FETCH_USER, payload: response?.data});
// };

//* After refactoring2
export const fetchUser = () => async (dispatch: Dispatch) => {
  dispatch({type: FETCH_USER, payload: (await axios.get("/api/current_user"))?.data});
};

export const handleToken = (token: Token) => async (dispatch: Dispatch) => {
  const response = await axios.post("/api/stripe", token);
  dispatch({type: FETCH_USER, payload: response?.data});
};

export const submitSurvey = (values: Values) => {
  return {type: "SUBMIT_SURVEY"};
};
