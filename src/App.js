import "./App.css";

import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages';

/** App: Top level component of the entire application. 
 *  Uses Switch component to render Home component.
 * 
 *  Please note the components within this App often use styled-components package for styling.
 * 
 * @category React Components
 * @component 
 */
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
