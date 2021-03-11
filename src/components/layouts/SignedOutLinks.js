import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedOutLinks() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-NavLink" to="/SignUp">
            Sign Up
          </NavLink>
          <NavLink className="nav-NavLink" to="/SignIn">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
