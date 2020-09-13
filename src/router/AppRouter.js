import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ExpenseDashboard from "../components/pages/ExpenseDashboard";
import AddExpense from "../components/pages/AddExpense";
import EditExpense from "../components/pages/EditExpense";
import HelpPage from "../components/pages/HelpPage";
import NotFound from "../components/pages/NotFound";
import Login from "../components/pages/Login";
import { createBrowserHistory } from "history";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact={true} path={"/"} component={Login} />
          <PrivateRoute path={"/dashboard"} component={ExpenseDashboard} />
          <PrivateRoute path={"/create"} component={AddExpense} />
          <PrivateRoute path={"/edit/:id"} component={EditExpense} />
          <Route path={"/help"} component={HelpPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
