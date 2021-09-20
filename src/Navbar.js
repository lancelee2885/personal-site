import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-between" >
        <ul className="navbar-nav me-auto">
          <li className="navbar-brand"><NavLink exact to="/">Lance Lee</NavLink></li>
        </ul>
        <div>
        <ul className="navbar-nav me-auto me-sm-2 navbar-center" >
          <li className="nav-item"><NavLink exact to="/companies" >Blog</NavLink></li>
          <li className="nav-item"><NavLink exact to="/jobs" >About</NavLink></li>
        </ul>
      </div>

      </nav>
    </div>
  );
}

export default NavBar;