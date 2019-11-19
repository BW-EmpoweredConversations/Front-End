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

  const submitHandler = e => {
    e.preventDefault();
    console.log(`submit`);
    axios
      .post(
        `https://empoweredconversations.herokuapp.com/api/users/:user_id/conversations`,
        {
          name: info.otherName,
          phone_number: info.otherPhone
        }
      )

      .then(res => console.log(res))
      .then(props.history.push("/confirmed"));

    setDisplayModal(false);
    setInfo({
      name: "",
      phone_number: ""
    });
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(props.token));
  }, [props.token]);

  return (
    <div className="form-container">
      <form className="home_form_container">
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
        <button
          disabled={info.name.length === 0 || info.phone_number.length === 0}
          className="conti_btn"
          onClick={continueHandler}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.login.username,
    token: state.token
  };
};

export default connect(mapStateToProps, {})(Home);
