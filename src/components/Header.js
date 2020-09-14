import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../redux/actions/auth";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>
              <i className="fad fa-coins" /> Budget Manager
            </h1>
          </Link>
          <button
            className="button button--link"
            onClick={dispatch(startLogout)}
          >
            <i className="fad fa-sign-out-alt" /> Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
