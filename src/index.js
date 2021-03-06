import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("App")
);
