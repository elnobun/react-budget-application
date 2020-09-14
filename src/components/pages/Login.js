import React from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="login-layout">
      <div className="login-layout__box">
        <h1 className="login-layout__title">Budget Manager</h1>
        <p>Get your expenses under control</p>
        <button className="button" onClick={dispatch(startLogin)}>
          <i className="fab fa-google-plus-g" /> Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
