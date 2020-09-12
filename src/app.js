import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./redux/store/storeConfig";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
import { startSetExpenses } from "./redux/actions/expenses";

ReactDOM.render(
  <React.StrictMode>
    <p>Loading...</p>
  </React.StrictMode>,
  document.getElementById("root")
);

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
