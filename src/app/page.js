"use client";
import React from "react";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./components/store";

function page() {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

export default page;
