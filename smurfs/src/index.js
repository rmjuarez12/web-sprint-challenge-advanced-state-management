// Import Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Import Assets
import "./index.css";

// Import Components
import App from "./components/App";

// Import Reducer
import rootReducer from "./store/reducers";

// The store variable that we will use for Redux
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
