import React from "react";
import { Link } from "react-router-dom";

const startConvo = props => {
  return (
    <div className="form-container">
      <div className="convo-header">
        <h1>Welcome to Empowered Conversation</h1>
      </div>
      <p>
        If you have received a verification code, click{" "}
        <Link to="/Responder">here</Link>.
      </p>
      <p>
        Otherwise, start your conversation <Link to="/Register">here</Link>.
      </p>
    </div>
  );
};

export default startConvo;
