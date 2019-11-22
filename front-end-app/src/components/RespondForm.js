import React, { useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import ResponderVid from "./ResponderVid";
import axios from 'axios';

const Responder = props => {
  const [info, setInfo] = useState({
    verification_code: "",
    name: ""
  });

  const changeHandler = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://empoweredconversations.herokuapp.com/api/conversations', {name: info.name, code: info.verification_code})
      .then(resp => {
        window.alert("Your message has been sent!");
        window.location = "https://zealous-williams-0d9378.netlify.com";
      })
  };

  return (
    <div className="form-container">
      <ResponderVid />
      <form className="home_form_container" onSubmit={handleSubmit}>
        <h1>You are about to have a hard conversation</h1>
        <p>
          Fill out the form below and we will notify the other party that you
          are ready to have a conversation.
        </p>
        <input
          type="tel"
          name="verification_code"
          placeholder="Verification Code"
          value={info.verification_code}
          onChange={changeHandler}
          className="field-container"
        />
        <input
          type="text"
          name="name"
          value={info.name}
          placeholder="Name"
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
    name: state.login.name
  };
};

export default connect(mapStateToProps, {})(Responder);
