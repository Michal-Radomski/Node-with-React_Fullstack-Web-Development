import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./components/App";
import store from "./redux/store";

import axios from "axios";
declare global {
  interface Window {
    axios: Fetch;
  }
}
window.axios = axios;
//* Temp-email: https://temp-mail.org/pl
// let survey = {title: "My title", subject: "my subject", recipients: "ledaxa8910@dilanfa.com", body: "email body"};
// axios.post("/api/surveys", survey);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  root
);
