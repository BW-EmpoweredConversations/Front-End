import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
// import StartConvo from "./components/StartConvo";
import MsgForm from "./components/MsgForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/Conversation" component={MsgForm} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, {})(App);
