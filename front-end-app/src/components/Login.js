import React, { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../actions/index";
import "../App.css";
import styled from "styled-components";

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

  const FormContainer = styled.div`
    width: 460px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 32px;
    font-weight: bold;
    background-color: #e0f0fc;
    box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.2);
  `;

  return (
    <FormContainer>
      <h2>Login</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={login.username}
            onChange={handleChanges}
            placeholder="username"
            className="field-container"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={login.password}
            placeholder="password"
            onChange={handleChanges}
            className="field-container"
          />
        </div>
        <button
          disabled={login.username.length === 0 || login.password.length === 0}
          className="login_btn"
        >
          Login
        </button>
      </form>
    </FormContainer>
  );
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps, { userLogin })(Login);
