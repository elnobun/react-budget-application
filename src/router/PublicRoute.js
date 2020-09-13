import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
