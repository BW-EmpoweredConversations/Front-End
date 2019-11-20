import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
// import StartConvo from "./components/StartConvo";
import MsgForm from "./components/MsgForm";
import Terms from "./components/Terms";
import Profile from "./components/Profile";
import { axiosWithAuth } from "./utils/axiosWithAuth";



function App() {
  return (
    <div className="App">
      <Header />
      <Profile/>
      <Route exact path="/Conversation" component={MsgForm} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Terms" component={Terms} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, {})(App);
