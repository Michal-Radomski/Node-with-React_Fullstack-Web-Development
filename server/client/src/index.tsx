// import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./components/App";
import store from "./redux/store";

//* Development only axios helper
import axios from "axios";
declare global {
  interface Window {
    axios: Fetch;
  }
}
window.axios = axios;
//* Temp-email: https://temp-mail.org/pl
// let survey = {
//   title: "Title of the Message",
//   subject: "Subject: Survey",
//   recipients: "ledaxa8910@dilanfa.com",
//   body: "Give Us Feedback",
// };
// axios.post("/api/surveys", survey);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>,
  root
);
