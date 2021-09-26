import "./App.css";

import React, {useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import {CSSTransition} from 'react-transition-group'


import NavBar from './Navbar';
import Home from './Home';
import  Navbar  from "./components/Navbar/index";

function App() {

  return ( 
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App;
