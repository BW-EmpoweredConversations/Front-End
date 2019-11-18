import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/Register' component={Register} />
      <Route exact path='/Login' component={Login}/>
    </div>
  );
}

export default App;
