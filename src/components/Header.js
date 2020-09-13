import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../redux/actions/auth";

const Header = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Budget Manager</h1>
      <NavLink exact to={"/dashboard"} activeClassName={"is-active"}>
        Dashboard
      </NavLink>
      <NavLink to={"/create"} activeClassName={"is-active"}>
        AddExpense
      </NavLink>
      <button onClick={dispatch(startLogout)}>Logout</button>
    </div>
  );
};

export default Header;
