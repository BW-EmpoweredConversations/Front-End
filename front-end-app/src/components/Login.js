import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/index";
import "../App.css";

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleChanges = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.userLogin(login);
    localStorage.setItem("token", JSON.stringify(props.token));
    props.history.push("/");
  };

  return (
    <div className="login_form_container">
      <h2>Login</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <div className="login_username_container">
          <input
            type="text"
            name="username"
            value={login.username}
            onChange={handleChanges}
            placeholder="username"
          />
        </div>
        <div className="login_password_container">
          <input
            type="password"
            name="password"
            value={login.password}
            placeholder="password"
            onChange={handleChanges}
          />
        </div>
        <button
          disabled={login.username.length === 0 || login.password.length === 0}
          className="login_btn"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps, { userLogin })(Login);
