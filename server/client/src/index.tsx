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

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  root
);

// const survey = {title: "My title", subject: "my subject", recipients: "excesi91@01.tml.waw.pl", body: "email body"}
// axios.post("/api/surveys", survey)
