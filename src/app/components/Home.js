import React from "react";
import { Provider } from "react-redux";
import ClientComponent from "./ClientComponent";
import store from "./store";

function page() {
  return (
    <div>
      <Provider store={store}>
        <ClientComponent />
      </Provider>
    </div>
  );
}

export default page;
