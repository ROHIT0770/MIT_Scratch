import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "./store";
// console.log("hi");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
