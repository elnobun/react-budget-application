import React from "react";
import ReactDOM from "react-dom";
import { addExpense } from "./redux/actions/expenses";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./redux/store/storeConfig";
import "normalize.css/normalize.css";
import "./styles/styes.scss";
import "react-dates/lib/css/_datepicker.css";

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
