import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./components/App";
import store from "./redux/store";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  root
);
