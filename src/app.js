import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./router/AppRouter";
import store from "./redux/store/storeConfig";
import { startSetExpenses } from "./redux/actions/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./redux/actions/auth";

// Create application root
const rootApp = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

// Set variable to chek if app has redered
let hasRendered = false;

// Funtion to render app
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(rootApp, document.getElementById("root"));
    hasRendered = true;
  }
};

// Default state on asynchronous request
ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

// Firebase authentication user state
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
