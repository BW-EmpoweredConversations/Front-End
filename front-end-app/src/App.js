import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={Register} />
    </div>
  );
}

export default App;
