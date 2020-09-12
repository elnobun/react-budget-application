import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Budget Manager</h1>
      <NavLink exact to={"/"} activeClassName={"is-active"}>
        Dashboard
      </NavLink>
      <NavLink to={"/create"} activeClassName={"is-active"}>
        AddExpense
      </NavLink>
    </div>
  );
};

export default Header;
