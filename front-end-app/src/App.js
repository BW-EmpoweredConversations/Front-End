import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import MsgForm from "./components/MsgForm";
import Terms from "./components/Terms";
import Responder from "./components/RespondForm";
import StartConvo from "./components/StartConvo";
import Profile from "./components/Profile";
import Footer from "./components/Footer"
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header /> 
      <PrivateRoute exact path="/Conversation" component={MsgForm} />
      <Route exact path="/Start" component={StartConvo} />
      <Route exact path="/Responder" component={Responder} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Terms" component={Terms} />
      <Route exact path="/Profile" component={Profile} />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, {})(App);
