import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ExpenseDashboard from "../components/pages/ExpenseDashboard";
import AddExpense from "../components/pages/AddExpense";
import EditExpense from "../components/pages/EditExpense";
import NotFound from "../components/pages/NotFound";
import Login from "../components/pages/Login";
import { createBrowserHistory } from "history";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <>
        <Switch>
          <PublicRoute exact={true} path={"/"} component={Login} />
          <PrivateRoute path={"/dashboard"} component={ExpenseDashboard} />
          <PrivateRoute path={"/create"} component={AddExpense} />
          <PrivateRoute path={"/edit/:id"} component={EditExpense} />
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
