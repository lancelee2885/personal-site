import "./App.css";

import React, {useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import {CSSTransition} from 'react-transition-group'


import NavBar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App;
