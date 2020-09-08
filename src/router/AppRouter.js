import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboard from "../components/pages/ExpenseDashboard";
import AddExpense from "../components/pages/AddExpense";
import EditExpense from "../components/pages/EditExpense";
import HelpPage from "../components/pages/HelpPage";
import NotFound from "../components/pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={"/"} component={ExpenseDashboard} />
        <Route path={"/create"} component={AddExpense} />
        <Route path={"/edit/:id"} component={EditExpense} />
        <Route path={"/help"} component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
