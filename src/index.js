import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Tangerine"
    ></link>
    <App />
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
