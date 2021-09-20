import "./App.css";

import React from 'react';
import { BrowserRouter } from "react-router-dom";

import NavBar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <NavBar />
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App;
