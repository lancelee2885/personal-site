import "./App.css";

import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages';


function App() {

  return ( 
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
