import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "../App.css";

const Home = props => {
  const [info, setInfo] = useState({
    name: "",
    phone_number: ""
  });

  console.log(props.name, props.token);

  const [displayModal, setDisplayModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const changeHandler = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const continueHandler = e => {
    e.preventDefault();
    setDisplayModal(true);
  };

  const cancelHandler = () => {
    setDisplayModal(false);
  };

  const checkHandler = () => {
    setChecked(!checked);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.history.push("/Terms");
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(props.token));
  }, [props.token]);

  return (
    <div className="form-container">
      <form className="home_form_container" onSubmit={handleSubmit}>
        <h1>Start a Conversation</h1>
        <p>
          Fill out the form below and we will send a message to your friend or
          family member...
        </p>
        <input
          type="text"
          name="name"
          value={info.name}
          placeholder="Recipient Name"
          onChange={changeHandler}
          className="field-container"
        />
        <input
          type="tel"
          name="phone_number"
          placeholder="Recipient Phone Number"
          value={info.phone_number}
          onChange={changeHandler}
          className="field-container"
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.login.name,
    token: state.token
  };
};

export default connect(mapStateToProps, {})(Home);
