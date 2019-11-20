import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/index";
import { Link } from "react-router-dom";
import "../App.css";

const Login = props => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChanges = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.userLogin(login);
    props.history.push("/Conversation");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleChanges}
            placeholder="email"
            className="field-container"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={login.password}
            placeholder="Password"
            onChange={handleChanges}
            className="field-container"
          />
        </div>
        <p>
          Don't have an account? Sign up <Link to="/Register">here</Link>
        </p>
        <button
          disabled={login.email.length === 0 || login.password.length === 0}
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
