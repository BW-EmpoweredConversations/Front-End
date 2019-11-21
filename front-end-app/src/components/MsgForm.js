import React, { useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import MessangerVid from "./MessangerVid";
import { messageSend } from "../actions/index";

const MsgForm = props => {
  const [info, setInfo] = useState({
    name: "",
    phone_number: ""
  });

  const changeHandler = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.messageSend(info);
    props.history.push("/Terms");
  };

  return (
    <div className="form-container">
      <MessangerVid />
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
    token: state.token
  };
};

export default connect(mapStateToProps, { messageSend })(MsgForm);
